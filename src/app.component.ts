import { Component, ChangeDetectionStrategy, signal, AfterViewInit } from '@angular/core';

interface Course {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  isMobileMenuOpen = signal(false);
  
  readonly currentYear = new Date().getFullYear();

  courses = signal<Course[]>([
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`,
      name: 'RCP (Reanimación Cardiopulmonar)',
      description: 'Aprenda las técnicas esenciales para responder a emergencias cardíacas. Nuestro curso de RCP está certificado y es impartido por instructores expertos.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>`,
      name: 'DEA (Desfibrilador Externo Automático)',
      description: 'Capacítese en el uso del Desfibrilador Externo Automático para salvar vidas. Un complemento vital para cualquier entrenamiento de primeros auxilios.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>`,
      name: 'SVB (Soporte Vital Básico)',
      description: 'Nuestro curso integral de SVB cubre una amplia gama de habilidades, desde RCP y uso de DEA hasta manejo de asfixia.'
    }
  ]);
  
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  scrollTo(sectionId: string): void {
    if (typeof document !== 'undefined') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    this.isMobileMenuOpen.set(false);
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => this.scrollTo(sectionId), 100);
    }
  }
}
