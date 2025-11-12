import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isMobileMenuOpen = signal(false);
  isCoursesMenuOpen = signal(false);
  
  readonly logoUrl = 'assets/images/logo.png'
  readonly currentYear: number;

  // FIX: Explicitly type the injected Router to fix type inference issue.
  private router: Router = inject(Router);
  translationService = inject(TranslationService);
  
  language = this.translationService.language;
  t = this.translationService.t;
  
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  useLanguage(language: 'ca' | 'es'): void {
    this.translationService.useLanguage(language);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
    if (!this.isMobileMenuOpen()) {
      this.isCoursesMenuOpen.set(false);
    }
  }

  toggleCoursesMenu(): void {
    this.isCoursesMenuOpen.update(value => !value);
  }

  scrollTo(sectionId: string): void {
    if (typeof document !== 'undefined') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
  }

  navigateToHomeAndScroll(sectionId: string): void {
    this.isMobileMenuOpen.set(false);
    this.isCoursesMenuOpen.set(false);
    this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollTo(sectionId), 100);
    });
  }

  closeMenus() {
    this.isCoursesMenuOpen.set(false);
    this.isMobileMenuOpen.set(false);
  }
}