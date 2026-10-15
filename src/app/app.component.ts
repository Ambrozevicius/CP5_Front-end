import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  inject,
} from "@angular/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { portfolio } from "./data/portfolio.data";
import { SelectedWorkComponent } from "./components/selected-work.component";

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: "app-root",
  standalone: true,
  imports: [SelectedWorkComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly data = portfolio;
  private readonly host = inject(ElementRef<HTMLElement>);
  private media?: gsap.MatchMedia;
  private introPlayed = false;
  ngAfterViewInit() {
    this.media = gsap.matchMedia();
    this.media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 900px) and (pointer: fine)",
      },
      (context) => {
        if (!context.conditions?.["motion"]) return;
        const root = this.host.nativeElement;
        const select = gsap.utils.selector(root);
        const desktop = !!context.conditions["desktop"];
        const lenis = desktop
          ? new Lenis({
              duration: 0.85,
              anchors: { offset: -24 },
              prevent: (node) => node.closest("dialog") !== null,
            })
          : undefined;
        const tick = (time: number) => lenis?.raf(time * 1000);
        if (lenis) {
          lenis.on("scroll", ScrollTrigger.update);
          gsap.ticker.add(tick);
        }
        if (!this.introPlayed) {
          this.introPlayed = true;
          const intro = gsap.timeline();
          intro
            .set(select(".loader"), { display: "flex" })
            .fromTo(
              select(".loader-line"),
              { scaleX: 0 },
              { scaleX: 1, duration: 0.65, ease: "power2.inOut" },
            )
            .to(select(".loader"), {
              yPercent: -100,
              duration: 0.45,
              ease: "power3.inOut",
            })
            .from(
              select(".hero-meta, .header"),
              { opacity: 0, duration: 0.35 },
              "-=.15",
            )
            .from(
              select(".name-line > span"),
              {
                yPercent: 110,
                rotate: 3,
                duration: 0.85,
                stagger: 0.12,
                ease: "power4.out",
              },
              "-=.2",
            )
            .from(
              select(".hero-secondary"),
              { opacity: 0, y: 12, duration: 0.5, stagger: 0.1 },
              "-=.5",
            );
        }
        gsap.to(select(".hero-symbol"), {
          rotation: 20,
          y: desktop ? 70 : 20,
          ease: "none",
          scrollTrigger: {
            trigger: select(".hero")[0],
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.fromTo(
          select(".statement-line:nth-child(1)"),
          { xPercent: -5 },
          {
            xPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: select(".statement")[0],
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
        gsap.fromTo(
          select(".statement-line:nth-child(3)"),
          { xPercent: 5 },
          {
            xPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: select(".statement")[0],
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
        for (const element of select(".reveal"))
          gsap.from(element, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          });
        for (const line of select(".section-label"))
          gsap.from(line, {
            "--line-scale": 0,
            duration: 0.8,
            scrollTrigger: { trigger: line, start: "top 92%", once: true },
          });
        gsap.to(select(".scroll-progress"), {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: true },
        });
        let active = true;
        const refresh = () => {
          if (active) ScrollTrigger.refresh();
        };
        document.fonts.ready.then(refresh);
        return () => {
          active = false;
          gsap.ticker.remove(tick);
          lenis?.destroy();
        };
      },
      this.host.nativeElement,
    );
  }
  ngOnDestroy() {
    this.media?.revert();
  }
}
