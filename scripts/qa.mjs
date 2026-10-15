import { chromium, expect } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

// Run with npm start in another terminal. Screenshots and results are local artifacts.
await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:4200";
try {
  for (const width of [375, 768, 1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: 960 } });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (["error", "warning"].includes(message.type()))
        errors.push(message.text());
    });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.waitForTimeout(1900);
    assert(await page.locator("h1").isVisible());
    assert.equal(await page.locator("html").getAttribute("lang"), "en");
    assert.equal(
      await page.locator("h1").getAttribute("aria-label"),
      "Isaac Ambrozevicius",
    );
    assert.equal(await page.locator(".project-row").count(), 4);
    assert.equal(await page.locator(".certification-list li").count(), 6);
    assert.equal(await page.locator(".education-item").count(), 2);
    assert.equal(
      await page.locator(".contact-links a").count(),
      0,
      "Missing URLs should not produce links",
    );
    assert(
      await page.locator(".name-line.second").evaluate((element) => {
        const text = element.firstElementChild.getBoundingClientRect();
        const mask = element.getBoundingClientRect();
        return text.right <= mask.right + 1 && text.left >= mask.left - 1;
      }),
      `Surname clipped at ${width}`,
    );
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Overflow at ${width}`,
    );
    await page.screenshot({ path: `artifacts/hero-${width}.png` });
    await page.locator('nav a[href="#work"]').click();
    await page.waitForTimeout(1300);
    const workY = await page
      .locator("#work")
      .evaluate((element) => element.getBoundingClientRect().top);
    assert(Math.abs(workY) < 80, `Anchor at ${width}: ${workY}`);
    const project = page.locator(".project-row").first();
    await project.focus();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(100);
    assert(await page.locator("dialog").isVisible());
    assert(
      await page.locator("dialog").evaluate((element) => {
        const box = element.getBoundingClientRect();
        return Math.abs(box.left + box.width / 2 - innerWidth / 2) < 2;
      }),
      "Case study should be centered",
    );
    assert.equal(
      await page.locator("dialog h2").innerText(),
      "Dynamic Service Catalog Hierarchy",
    );
    assert.equal(
      await page.locator("dialog .case-sections section").count(),
      4,
    );
    assert(
      await page
        .locator("dialog")
        .evaluate((el) => el.scrollWidth <= el.clientWidth),
      "Case study overflow",
    );
    await page.keyboard.press("Escape");
    assert(!(await page.locator("dialog").isVisible()));
    assert(
      await project.evaluate((element) => element === document.activeElement),
    );
    if (width >= 1024) {
      await project.hover();
      await page.waitForTimeout(300);
      assert.equal(
        await project
          .locator(".project-preview")
          .evaluate((el) => getComputedStyle(el).opacity),
        "1",
      );
    } else if (width === 375) {
      assert(await project.locator(".project-preview").isVisible());
    }
    await page.locator('nav a[href="#contact"]').click();
    await page.waitForTimeout(1300);
    assert(await page.locator("#contact-title").isVisible());
    await page.setViewportSize({ width: 768, height: 375 });
    await page.waitForTimeout(300);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      "Resize overflow",
    );
    await page.setViewportSize({ width, height: 960 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    assert.deepEqual(errors, [], `Console errors: ${errors.join(", ")}`);
    results.push({
      width,
      passed: true,
      checks: [
        "initial load",
        "overflow",
        "anchors",
        "keyboard dialog",
        "focus restore",
        "preview",
        "resize",
        "console",
      ],
    });
    await page.close();
  }
  const reduced = await browser.newPage({
    viewport: { width: 1440, height: 960 },
    reducedMotion: "reduce",
  });
  await reduced.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(
    await reduced
      .locator(".loader")
      .evaluate((el) => getComputedStyle(el).display),
    "none",
  );
  assert(
    !((await reduced.locator("html").getAttribute("class")) || "").includes(
      "lenis",
    ),
  );
  await reduced.screenshot({
    path: "artifacts/full-reduced-motion.png",
    fullPage: true,
  });
  await reduced.keyboard.press("Tab");
  assert.equal(
    await reduced
      .locator(".skip-link")
      .evaluate((el) => el === document.activeElement),
    true,
  );
  await reduced.keyboard.press("Enter");
  assert.equal(new URL(reduced.url()).hash, "#main");
  for (const name of [
    "Dynamic Service Catalog Hierarchy",
    "SLA Lifecycle Investigation",
    "Special Sales Request Experience",
    "Secure Customer Document Experience",
  ]) {
    await reduced
      .getByRole("button", { name: `Read case study: ${name}`, exact: true })
      .click();
    await expect(reduced.locator("dialog h2")).toHaveText(name);
    assert.equal(
      await reduced.locator("dialog .case-sections section").count(),
      4,
    );
    await reduced.locator(".close-button").click();
  }
  results.push({ reducedMotion: true, passed: true });
  const touch = await browser.newPage({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    hasTouch: true,
  });
  await touch.goto(baseUrl, { waitUntil: "networkidle" });
  await touch.waitForTimeout(1900);
  await touch.locator(".project-row").nth(1).tap();
  assert(await touch.locator("dialog").isVisible());
  await touch.locator(".close-button").tap();
  assert(!(await touch.locator("dialog").isVisible()));
  await touch.emulateMedia({ reducedMotion: "reduce" });
  assert(
    !((await touch.locator("html").getAttribute("class")) || "").includes(
      "lenis",
    ),
  );
  results.push({ touch: true, passed: true });
  await writeFile(
    "artifacts/qa-results.json",
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
