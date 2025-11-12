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
  
  readonly logoUrl = 'data:image/png;base64,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ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f40P5K/8ALzI2n34f4d+f3L/y8yNp9+H+ND+Sv/LzI2n34f40P5K/8vMjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mjaffh/jQ/kr/AM/Mika3/h/35/MvaXgEAAAAASUVORK5CYII=';
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