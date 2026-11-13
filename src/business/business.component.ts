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
  replyTo = signal('');
  honeypot = signal('');
  sending = signal(false);
  sent = signal(false);
  failed = signal(false);

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
    this.replyTo.set(data.email);
    this.honeypot.set(read('website'));
    this.prepared.set(true);
    document.getElementById('request-review')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  async send() {
    if (this.sending() || this.sent()) return;
    this.sending.set(true);
    this.failed.set(false);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://formsubmit.co/ajax/846bfe1258d3fbb945812f3fc39dad0c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: this.replyTo(),
          message: this.emailBody(),
          _honey: this.honeypot(),
          _subject: 'USAVE · Solicitud de formación para equipos',
          _template: 'table',
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('not accepted');
      this.sent.set(true);
    } catch {
      this.failed.set(true);
    } finally {
      clearTimeout(timeout);
      this.sending.set(false);
    }
  }

  edit() {
    this.prepared.set(false);
    this.sent.set(false);
    this.failed.set(false);

  }
}
