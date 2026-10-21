import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  translationService = inject(TranslationService);
  private router = inject(Router);

  t = this.translationService.t;

  budgetPrompt = computed(() => this.translationService.language() === 'ca'
    ? 'Per preparar el pressupost, indica’ns participants, lloc, dates orientatives i què necessita el vostre equip.'
    : 'Para preparar el presupuesto, indícanos participantes, lugar, fechas orientativas y qué necesita vuestro equipo.');

  budgetEmailUrl = computed(() => {
    const isCatalan = this.translationService.language() === 'ca';
    const subject = isCatalan ? 'Sol·licitud de pressupost de formació — USAVE' : 'Solicitud de presupuesto de formación — USAVE';
    const body = isCatalan
      ? 'Bon dia,\n\nVoldríem una proposta de formació per al nostre equip:\n\nEmpresa o entitat:\nNombre aproximat de participants:\nLloc de la formació:\nDates orientatives:\nNecessitat o tipus de formació:\nPersona de contacte:\n\nGràcies.'
      : 'Buenos días:\n\nNos gustaría recibir una propuesta de formación para nuestro equipo:\n\nEmpresa o entidad:\nNúmero aproximado de participantes:\nLugar de la formación:\nFechas orientativas:\nNecesidad o tipo de formación:\nPersona de contacto:\n\nGracias.';
    return `mailto:formacio.usave@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  upcomingCourse = Date.now() < new Date('2026-11-14T09:00:00+01:00').getTime();
  marinaEmailUrl = computed(() => {
    const ca = this.translationService.language() === 'ca';
    const subject = 'MARINA - SVB + DEA - 14/11/2026';
    const body = ca
      ? 'Bon dia, voldria informació per inscriure’m al curs del Centre Mèdic Marina del 14 de novembre.\n\nNom:\nNombre de persones:\nTelèfon de contacte:'
      : 'Hola, me gustaría recibir información para inscribirme en el curso del Centre Mèdic Marina del 14 de noviembre.\n\nNombre:\nNúmero de personas:\nTeléfono de contacto:';
    return 'mailto:formacio.usave@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  scrollTo(sectionId: string): void {
    if (typeof document !== 'undefined') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
  }
}
