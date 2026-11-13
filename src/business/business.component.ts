import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../translation.service';
import { BusinessRequest, campaignSource, requestEmail } from './request';

@Component({
  selector: 'app-business',
  standalone: true,
  templateUrl: './business.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent {
  private translations = inject(TranslationService);
  private route = inject(ActivatedRoute);
  ca = computed(() => this.translations.language() === 'ca');
  prepared = signal(false);
  emailUrl = signal('');
  emailBody = signal('');
  copied = signal(false);

  prepare(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const read = (key: string) => String(fields.get(key) || '').trim();
    const data: BusinessRequest = {
      name: read('name'), email: read('email'), company: read('company'),
      location: read('location'), participants: read('participants'),
      need: read('need'), timing: read('timing'), phone: read('phone'),
    };
    const result = requestEmail(data, this.ca() ? 'ca' : 'es', campaignSource(this.route.snapshot.queryParamMap));
    this.emailUrl.set(result.url);
    this.emailBody.set(result.body);
    this.copied.set(false);
    this.prepared.set(true);
    document.getElementById('request-review')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  async copy() {
    try {
      await navigator.clipboard.writeText(this.emailBody());
      this.copied.set(true);
    } catch {
      this.copied.set(false);
      document.getElementById('email-preview')?.focus();
    }
  }

  edit() {
    this.prepared.set(false);
    this.copied.set(false);
  }
}
