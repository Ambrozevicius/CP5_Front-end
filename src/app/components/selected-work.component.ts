import { Component, ElementRef, ViewChild, signal } from "@angular/core";
import { portfolio } from "../data/portfolio.data";

@Component({
  selector: "app-selected-work",
  standalone: true,
  template: `
    <section id="work" class="work section-pad" aria-labelledby="work-title">
      <div class="section-label">
        <span>03 / SELECTED WORK</span><span>PLATFORM / PROCESS / PEOPLE</span>
      </div>
      <div class="work-heading">
        <h2 id="work-title">
          {{ data.work.title[0] }}<br /><span class="muted">{{
            data.work.title[1]
          }}</span>
        </h2>
        <p class="mono">
          {{ data.projects.length.toString().padStart(2, "0") }} SELECTED
          CASES<br />{{ data.work.note }}
        </p>
      </div>
      <div class="project-list">
        @for (project of data.projects; track project.id) {
          <button
            class="project-row"
            (click)="open(project, $event)"
            (pointermove)="move($event)"
            aria-haspopup="dialog"
            [attr.aria-label]="'Read case study: ' + project.name"
          >
            <span class="project-number mono">{{ project.id }}</span>
            <span class="project-info"
              ><span class="project-name">{{ project.name }}</span
              ><span class="mono project-category">{{
                project.category
              }}</span></span
            >
            <span class="project-year mono">{{ project.year }}</span
            ><span class="project-arrow" aria-hidden="true">↗</span>
            <span
              class="project-preview"
              [class]="'project-preview ' + project.type"
              aria-hidden="true"
              ><span class="preview-meta mono">CASE / {{ project.id }}</span
              ><span class="preview-art"></span
              ><strong>{{ project.word }}</strong
              ><span class="preview-bottom mono">READ CASE STUDY ↗</span></span
            >
          </button>
        }
      </div>
      <div class="work-bottom mono">
        <span>{{ data.work.footnote }}</span
        ><span>INDEX / {{ data.year }}</span>
      </div>
    </section>
    <dialog
      #detail
      class="project-dialog"
      aria-labelledby="project-detail-title"
      aria-describedby="project-detail-description"
      (click)="backdrop($event)"
    >
      @if (selected(); as project) {
        <div class="dialog-inner">
          <div class="flex items-center justify-between gap-4">
            <span class="mono"
              >CASE STUDY / {{ project.id }} / {{ project.year }}</span
            ><button
              class="close-button mono"
              (click)="close()"
              autofocus
              aria-label="Close project details"
            >
              CLOSE ×
            </button>
          </div>
          <div [class]="'dialog-art ' + project.type" aria-hidden="true">
            <span class="preview-art"></span><strong>{{ project.word }}</strong>
          </div>
          <h2 id="project-detail-title">{{ project.name }}</h2>
          <p id="project-detail-description">{{ project.description }}</p>
          <div class="case-sections">
            <section>
              <h3 class="mono">01 / THE CHALLENGE</h3>
              <p>{{ project.challenge }}</p>
            </section>
            <section>
              <h3 class="mono">02 / THE APPROACH</h3>
              <p>{{ project.approach }}</p>
            </section>
            <section>
              <h3 class="mono">03 / THE OUTCOME</h3>
              <p>{{ project.outcome }}</p>
            </section>
            <section>
              <h3 class="mono">TECHNOLOGIES & CONTEXT</h3>
              <ul class="case-technologies mono">
                @for (technology of project.technologies; track technology) {
                  <li>{{ technology }}</li>
                }
              </ul>
            </section>
          </div>
          @if (project.url) {
            <a
              class="text-link mono"
              [href]="project.url"
              target="_blank"
              rel="noopener noreferrer"
              >OPEN PROJECT ↗</a
            >
          }
          <p class="case-confidentiality mono">
            {{ data.work.confidentiality }}
          </p>
        </div>
      }
    </dialog>
  `,
})
export class SelectedWorkComponent {
  readonly data = portfolio;
  readonly selected = signal<(typeof portfolio.projects)[number] | null>(null);
  @ViewChild("detail") detail!: ElementRef<HTMLDialogElement>;
  private opener?: HTMLElement;
  open(project: (typeof portfolio.projects)[number], event: Event) {
    this.opener = event.currentTarget as HTMLElement;
    this.selected.set(project);
    this.detail.nativeElement.showModal();
    this.detail.nativeElement.scrollTop = 0;
  }
  close() {
    this.detail.nativeElement.close();
    this.opener?.focus();
  }
  backdrop(event: MouseEvent) {
    if (event.target === this.detail.nativeElement) this.close();
  }
  move(event: PointerEvent) {
    if (
      event.pointerType !== "mouse" ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const row = event.currentTarget as HTMLElement;
    const box = row.getBoundingClientRect();
    row.style.setProperty(
      "--preview-x",
      `${((event.clientX - box.left) / box.width - 0.5) * 24}px`,
    );
    row.style.setProperty(
      "--preview-y",
      `${((event.clientY - box.top) / box.height - 0.5) * 12}px`,
    );
  }
}
