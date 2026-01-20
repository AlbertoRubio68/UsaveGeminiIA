import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-spaces',
  standalone: true,
  templateUrl: './spaces.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacesComponent {
  translationService = inject(TranslationService);
  t = this.translationService.t;
}
