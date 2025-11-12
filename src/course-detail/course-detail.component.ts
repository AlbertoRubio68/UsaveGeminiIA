import { Component, ChangeDetectionStrategy, inject, signal, computed, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from '../translation.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailComponent {
  // FIX: Explicitly type injected services to fix type inference issues.
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  translationService = inject(TranslationService);
  
  t = this.translationService.t;
  
  private courseId = signal<string | null>(null);
  
  course = computed(() => {
    const langT = this.t();
    const id = this.courseId();
    if (!langT?.COURSES?.LIST || !id) return null;
    
    return langT.COURSES.LIST.find(c => c.id === id) || null;
  });

  durationLabel = computed(() => {
    return this.t()?.COURSES?.LIST?.[0]?.DURATION_LABEL;
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
        this.courseId.set(params.get('id'));
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    });
  }

  navigateToHomeAndScroll(sectionId: string): void {
    this.router.navigate(['/']).then(() => {
        setTimeout(() => {
            if (typeof document !== 'undefined') {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, 100);
    });
  }
}