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
  januaryCourse = Date.now() < new Date('2027-01-16T09:00:00+01:00').getTime();
  januaryRegistrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScpnwdbh6gn4ux6JBE0TomsU8_0BIO7lgzfO-ehPa6ZNfeoUw/viewform';
  januaryCourseText = computed(() => this.translationService.language() === 'ca' ? {
    date: 'Dissabte 16 de gener de 2027',
    title: 'Curs oficial de SVB i DEA · ERC',
    location: 'Centre Mèdic Marina · El Prat de Llobregat',
    venue: 'Av. de Josep Anselm Clavé, 5-7 · 08820 El Prat de Llobregat.',
    description: 'Aprèn a reconèixer una emergència i practica RCP, l’ús del DEA d’entrenament i les maniobres davant un ennuegament. Certificat ERC en completar i superar el programa; validesa de 3 anys.',
    price: '79 € per persona',
    payment: 'Reserva de 20 € · Resta de 59 € abans del curs',
    cta: 'Inscriu-t’hi',
    note: 'Envia la sol·licitud amb les dades per a CoSy. Et confirmarem la plaça per correu després de validar la inscripció i rebre la reserva. El formulari no fa cap cobrament automàtic.'
  } : {
    date: 'Sábado 16 de enero de 2027',
    title: 'Curso oficial de SVB y DEA · ERC',
    location: 'Centre Mèdic Marina · El Prat de Llobregat',
    venue: 'Av. de Josep Anselm Clavé, 5-7 · 08820 El Prat de Llobregat.',
    description: 'Aprende a reconocer una emergencia y practica RCP, el uso del DEA de entrenamiento y las maniobras ante un atragantamiento. Certificado ERC al completar y superar el programa; validez de 3 años.',
    price: '79 € por persona',
    payment: 'Reserva de 20 € · Resto de 59 € antes del curso',
    cta: 'Inscribirme',
    note: 'Envía la solicitud con los datos para CoSy. Te confirmaremos la plaza por correo tras validar la inscripción y recibir la reserva. El formulario no realiza ningún cobro automático.'
  });
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
