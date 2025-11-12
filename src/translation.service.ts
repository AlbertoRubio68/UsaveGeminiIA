import { Injectable, signal, computed } from '@angular/core';

const allTranslations = {
  ca: {
    "HEADER": {
        "TITLE": "uSave Formació",
        "NAV": {
            "COURSES": "Cursos",
            "ABOUT": "Com Treballem",
            "TEAM": "El Nostre Equip",
            "FAQ": "FAQs",
            "CONTACT": "Contacte"
        }
    },
    "HERO": {
        "TITLE": "Formació Oficial en SVB i ús del DEA amb <span class=\"text-red-600\">Certificació ERC</span>",
        "SUBTITLE": "Compromesos amb la divulgació i l'ensenyament del Suport Vital Bàsic (SVB) per apropar la formació en primers auxilis a tota la ciutadania.",
        "CTA_BUTTON": "Explora els Cursos"
    },
    "COURSES": {
        "SECTION_TITLE": "La Nostra Oferta Formativa",
        "SECTION_SUBTITLE": "Cursos 100% pràctics i presencials, dinàmics i adaptats a cada entitat o centre.",
        "LIST": [
            {
                "id": "svb-dea",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
                "TITLE": "Curs Oficial de Suport Vital Bàsic i DEA",
                "CERTIFICATION": "Certificació ERC",
                "OBJECTIVE": "Dotar els participants de les habilitats necessàries per reconèixer una aturada cardiorespiratòria i actuar amb rapidesa mitjançant maniobres de reanimació i l'ús del DEA.",
                "CONTENT_TITLE": "Contingut principal:",
                "CONTENT_LIST": [
                    "Reconeixement de l'aturada cardiorespiratòria",
                    "RCP (reanimació cardiopulmonar) en adults",
                    "Ús correcte del DEA",
                    "Posició lateral de seguretat (PLS)",
                    "Actuació davant obstrucció de la via aèria",
                    "Activació de serveis d'emergència",
                    "Simulacions adaptades a cada context (esportiu, escolar, públic...)"
                ],
                "DURATION_LABEL": "Durada",
                "DURATION_VALUE": "6 hores presencials",
                "VALIDITY_LABEL": "Validesa",
                "VALIDITY_VALUE": "2 anys"
            },
            {
                "id": "reciclatge",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V5.25a3.375 3.375 0 0 0-3.375-3.375H8.25a3.375 3.375 0 0 0-3.375 3.375v2.25\" /></svg>",
                "TITLE": "Cursos de Reciclatge (Reacreditació)",
                "DESCRIPTION": "Per a persones que ja han realitzat el curs oficial i volen renovar coneixements i certificació. Inclou pràctica intensiva i actualització de protocols.",
                "DURATION": "2 hores",
                "CONTENT_TITLE": "Contingut principal:",
                "CONTENT_LIST": [
                  "Repàs dels conceptes clau de SVB",
                  "Pràctica intensiva de RCP de qualitat",
                  "Simulacions amb DEA i escenaris actualitzats",
                  "Resolució de dubtes i actualització de protocols ERC"
                ]
            },
            {
                "id": "pares",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75a17.933 17.933 0 0 1-7.499-1.632Z\" /></svg>",
                "TITLE": "Primers Auxilis per a Pares i Mares de Nadons (0-1 any)",
                "DESCRIPTION": "Dotar les famílies amb nadons de les eines necessàries per identificar i actuar amb rapidesa i seguretat davant situacions d'emergència freqüents.",
                "DURATION": "3-4 hores",
                 "CONTENT_TITLE": "Contingut principal:",
                 "CONTENT_LIST": [
                  "Prevenció d'accidents a la llar",
                  "Actuació davant febre i convulsions",
                  "Reconeixement i maniobres per a l'ennuegament (OVACE)",
                  "Reanimació cardiopulmonar (RCP) en lactants",
                  "Consells bàsics sobre farmaciola i trucada a emergències"
                ]
            },
            {
                "id": "educadors",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25h-13.5a2.25 2.25 0 0 1-2.25-2.25v-4.07m18-4.22a2.25 2.25 0 0 0-2.25-2.25H6.375a2.25 2.25 0 0 0-2.25 2.25m18 0M12.75 9.75h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm6 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Z\" /></svg>",
                "TITLE": "Primers Auxilis per a Educadors/es d'Escoles Infantils",
                "DESCRIPTION": "Capacitar els equips professionals de centres d'educació infantil per actuar davant emergències mèdiques freqüents, garantint una resposta ràpida i segura.",
                "DURATION": "4-5 hores",
                "CONTENT_TITLE": "Contingut principal:",
                "CONTENT_LIST": [
                  "Gestió de ferides, hemorràgies i traumatismes lleus",
                  "Actuació davant reaccions al·lèrgiques i asma",
                  "Prevenció i actuació en ennuegaments (OVACE) en nens",
                  "RCP pediàtrica i ús del DEA en entorns escolars",
                  "Protocol d'activació del sistema d'emergències (SEM)"
                ]
            }
        ]
    },
    "ABOUT": {
        "TITLE": "Com Treballem: Metodologia i Valors",
        "INTRO": "A uSave Formació entenem que aprendre a salvar vides és una responsabilitat, però també una oportunitat de créixer. La nostra metodologia es basa en tres pilars fonamentals: <strong>practicitat, adaptabilitat i rigor</strong>.",
        "FEATURES": [
            "<strong>Certificació oficial ERC:</strong> Cursos acreditats i reconeguts a nivell laboral, sanitari i esportiu.",
            "<strong>Equip humà compromès:</strong> Instructors amb experiència real i vocació docent.",
            "<strong>Formació a mida:</strong> Simulacions contextualitzades i adaptades al vostre entorn.",
            "<strong>Flexibilitat i proximitat:</strong> Ens adaptem a horaris, grups i espais amb un tracte directe."
        ]
    },
    "TEAM": {
        "TITLE": "El Nostre Equip",
        "SUBTITLE": "Som dos infermers amb experiència en emergències, apassionats per la formació.",
        "MEMBERS": [
            {
                "NAME": "Xavier Gomez Girbau",
                "ROLE": "Infermer i Instructor ERC",
                "IMAGE_URL": "assets/images/Xavi.jpg",
                "DESCRIPTION": "Amb anys d'experiència en serveis d'urgències hospitalàries, en Xavier aporta una perspectiva pràctica i realista a cada curs. La seva passió és ensenyar a actuar amb calma i eficàcia en moments crítics."
            },
            {
                "NAME": "Marc",
                "ROLE": "Infermer i Instructor ERC",
                "IMAGE_URL": "assets/images/Marc.jpg",
                "DESCRIPTION": "Especialitzat en emergències extrahospitalàries, en Marc té una gran vocació per la docència. El seu objectiu és que cada alumne se senti segur i preparat per aplicar els coneixements apresos."
            }
        ]
    },
    "FAQ": {
        "TITLE": "Preguntes Freqüents (FAQs)",
        "SUBTITLE": "Resolent els teus dubtes més comuns.",
        "QUESTIONS": [
            {
                "question": "Quina validesa té el certificat?",
                "answer": "El certificat de Suport Vital Bàsic i ús del DEA té una validesa de 2 anys, segons les directrius del Consell Europeu de Ressuscitació (ERC)."
            },
            {
                "question": "Quines titulacions tenen els instructors?",
                "answer": "Tots els instructors estan acreditats pel Consell Europeu de Ressuscitació (ERC) i segueixen formació contínua per mantenir els estàndards més alts de qualitat docent."
            },
            {
                "question": "Es poden fer els cursos a les nostres instal·lacions?",
                "answer": "Sí. Ens desplacem a centres educatius, esportius, municipals o privats, sempre que es disposi d'un espai adequat. També oferim l'opció de fer els cursos en espais propis de uSave."
            },
            {
                "question": "Quina és la durada ideal del curs?",
                "answer": "Per a persones sense formació sanitària, recomanem una durada de 6 hores, que permet adquirir les habilitats pràctiques i els coneixements teòrics bàsics de manera segura i efectiva."
            },
            {
                "question": "Quin és el mínim i màxim de participants?",
                "answer": "Els cursos estan dissenyats per grups de fins a 18 persones, tot i que és possible adaptar-los a grups més petits o grans en funció del context."
            },
            {
                "question": "Es poden programar cursos recurrents o en calendari?",
                "answer": "Sí. Oferim la possibilitat d'establir un calendari de formacions regular (trimestral, semestral o anual), especialment útil per escoles, ajuntaments o empreses amb alta rotació de personal."
            }
        ]
    },
    "CONTACT": {
        "TITLE": "Contacte i Properes Passes",
        "SUBTITLE": "Si la vostra entitat té interès en oferir formació, estem a la vostra disposició. Contacteu-nos per a una proposta personalitzada.",
        "EMAIL_BUTTON": "Enviar un Email",
        "PHONE_TEXT": "o truca'ns al 616 131 411"
    },
    "FOOTER": {
        "COPYRIGHT": "Tots els drets reservats."
    }
  },
  es: {
    "HEADER": {
        "TITLE": "uSave Formació",
        "NAV": {
            "COURSES": "Cursos",
            "ABOUT": "Cómo Trabajamos",
            "TEAM": "Nuestro Equipo",
            "FAQ": "FAQs",
            "CONTACT": "Contacto"
        }
    },
    "HERO": {
        "TITLE": "Formación Oficial en SVB y uso del DEA con <span class=\"text-red-600\">Certificación ERC</span>",
        "SUBTITLE": "Comprometidos con la divulgación y la enseñanza del Soporte Vital Básico (SVB) para acercar la formación en primeros auxilios a toda la ciudadanía.",
        "CTA_BUTTON": "Explora los Cursos"
    },
    "COURSES": {
        "SECTION_TITLE": "Nuestra Oferta Formativa",
        "SECTION_SUBTITLE": "Cursos 100% prácticos y presenciales, dinámicos y adaptados a cada entidad o centro.",
        "LIST": [
            {
                "id": "svb-dea",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
                "TITLE": "Curso Oficial de Soporte Vital Básico y DEA",
                "CERTIFICATION": "Certificación ERC",
                "OBJECTIVE": "Dotar a los participantes de las habilidades necesarias para reconocer una parada cardiorrespiratoria y actuar con rapidez mediante maniobras de reanimación y el uso del DEA.",
                "CONTENT_TITLE": "Contenido principal:",
                "CONTENT_LIST": [
                    "Reconocimiento de la parada cardiorrespiratoria",
                    "RCP (reanimación cardiopulmonar) en adultos",
                    "Uso correcto del DEA",
                    "Posición lateral de seguridad (PLS)",
                    "Actuación ante obstrucción de la vía aérea",
                    "Activación de servicios de emergencia",
                    "Simulaciones adaptadas a cada contexto (deportivo, escolar, público...)"
                ],
                "DURATION_LABEL": "Duración",
                "DURATION_VALUE": "6 horas presenciales",
                "VALIDITY_LABEL": "Validez",
                "VALIDITY_VALUE": "2 años"
            },
            {
                "id": "reciclatge",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V5.25a3.375 3.375 0 0 0-3.375-3.375H8.25a3.375 3.375 0 0 0-3.375 3.375v2.25\" /></svg>",
                "TITLE": "Cursos de Reciclaje (Reacreditación)",
                "DESCRIPTION": "Para personas que ya han realizado el curso oficial y quieren renovar conocimientos y certificación. Incluye práctica intensiva y actualización de protocolos.",
                "DURATION": "2 horas",
                "CONTENT_TITLE": "Contenido principal:",
                "CONTENT_LIST": [
                  "Repaso de los conceptos clave de SVB",
                  "Práctica intensiva de RCP de calidad",
                  "Simulaciones con DEA y escenarios actualizados",
                  "Resolución de dudas y actualización de protocolos ERC"
                ]
            },
            {
                "id": "pares",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75a17.933 17.933 0 0 1-7.499-1.632Z\" /></svg>",
                "TITLE": "Primeros Auxilios para Padres y Madres de Bebés (0-1 año)",
                "DESCRIPTION": "Dotar a las familias con bebés de las herramientas necesarias para identificar y actuar con rapidez y seguridad ante situaciones de emergencia frecuentes.",
                "DURATION": "3-4 horas",
                "CONTENT_TITLE": "Contenido principal:",
                "CONTENT_LIST": [
                  "Prevención de accidentes en el hogar",
                  "Actuación ante fiebre y convulsiones",
                  "Reconocimiento y maniobras para el atragantamiento (OVACE)",
                  "Reanimación cardiopulmonar (RCP) en lactantes",
                  "Consejos básicos sobre botiquín y llamada a emergencias"
                ]
            },
            {
                "id": "educadors",
                "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25h-13.5a2.25 2.25 0 0 1-2.25-2.25v-4.07m18-4.22a2.25 2.25 0 0 0-2.25-2.25H6.375a2.25 2.25 0 0 0-2.25 2.25m18 0M12.75 9.75h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm6 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Zm-1.5 0h.008v.008h-.008V9.75Z\" /></svg>",
                "TITLE": "Primeros Auxilios para Educadores/as de Escuelas Infantiles",
                "DESCRIPTION": "Capacitar a los equipos profesionales de centros de educación infantil para actuar ante emergencias médicas frecuentes, garantizando una respuesta rápida y segura.",
                "DURATION": "4-5 horas",
                 "CONTENT_TITLE": "Contenido principal:",
                 "CONTENT_LIST": [
                  "Gestión de heridas, hemorragias y traumatismos leves",
                  "Actuación ante reacciones alérgicas y asma",
                  "Prevención y actuación en atragantamientos (OVACE) en niños",
                  "RCP pediátrica y uso del DEA en entornos escolares",
                  "Protocolo de activación del sistema de emergencias (SEM)"
                 ]
            }
        ]
    },
    "ABOUT": {
        "TITLE": "Cómo Trabajamos: Metodología y Valores",
        "INTRO": "En uSave Formació entendemos que aprender a salvar vidas es una responsabilidad, pero también una oportunidad de crecer. Nuestra metodología se basa en tres pilares fundamentales: <strong>practicidad, adaptabilidad y rigor</strong>.",
        "FEATURES": [
            "<strong>Certificación oficial ERC:</strong> Cursos acreditados y reconocidos a nivel laboral, sanitario y deportivo.",
            "<strong>Equipo humano comprometido:</strong> Instructores con experiencia real y vocación docente.",
            "<strong>Formación a medida:</strong> Simulaciones contextualizadas y adaptadas a vuestro entorno.",
            "<strong>Flexibilidad y proximidad:</strong> Nos adaptamos a horarios, grupos y espacios con un trato directo."
        ]
    },
    "TEAM": {
        "TITLE": "Nuestro Equipo",
        "SUBTITLE": "Somos dos enfermeros con experiencia en emergencias, apasionados por la formación.",
        "MEMBERS": [
            {
                "NAME": "Xavier Gomez Girbau",
                "ROLE": "Enfermero e Instructor ERC",
                "IMAGE_URL": "assets/images/Xavi.jpg",
                "DESCRIPTION": "Con años de experiencia en servicios de urgencias hospitalarias, Xavier aporta una perspectiva práctica y realista a cada curso. Su pasión es enseñar a actuar con calma y eficacia en momentos críticos."
            },
            {
                "NAME": "Marc",
                "ROLE": "Enfermero e Instructor ERC",
                "IMAGE_URL": "assets/images/Marc.jpg",
                "DESCRIPTION": "Especializado en emergencias extrahospitalarias, Marc tiene una gran vocación por la docencia. Su objetivo es que cada alumno se sienta seguro y preparado para aplicar los conocimientos aprendidos."
            }
        ]
    },
    "FAQ": {
        "TITLE": "Preguntas Frecuentes (FAQs)",
        "SUBTITLE": "Resolviendo tus dudas más comunes.",
        "QUESTIONS": [
            {
                "question": "¿Qué validez tiene el certificado?",
                "answer": "El certificado de Soporte Vital Básico y uso del DEA tiene una validez de 2 años, según las directrices del Consejo Europeo de Resucitación (ERC)."
            },
            {
                "question": "¿Qué titulaciones tienen los instructores?",
                "answer": "Todos los instructores están acreditados por el Consejo Europeo de Resucitación (ERC) y siguen formación continua para mantener los más altos estándares de calidad docente."
            },
            {
                "question": "¿Se pueden realizar los cursos en nuestras instalaciones?",
                "answer": "Sí. Nos desplazamos a centros educativos, deportivos, municipales o privados, siempre que se disponga de un espacio adecuado. También ofrecemos la opción de realizar los cursos en espacios propios de uSave."
            },
            {
                "question": "¿Cuál es la duración ideal del curso?",
                "answer": "Para personas sin formación sanitaria, recomendamos una duración de 6 horas, que permite adquirir las habilidades prácticas y los conocimientos teóricos básicos de forma segura y efectiva."
            },
            {
                "question": "¿Cuál es el mínimo y máximo de participantes?",
                "answer": "Los cursos están diseñados para grupos de hasta 18 personas, aunque es posible adaptarlos a grupos más pequeños o grandes en función del contexto."
            },
            {
                "question": "¿Se pueden programar cursos recurrentes o en calendario?",
                "answer": "Sí. Ofrecemos la posibilidad de establecer un calendario de formaciones regular (trimestral, semestral o anual), especialmente útil para escuelas, ayuntamientos o empresas con alta rotación de personal."
            }
        ]
    },
    "CONTACT": {
        "TITLE": "Contacto y Próximos Pasos",
        "SUBTITLE": "Si vuestra entidad tiene interés en ofrecer formación, estamos a vuestra disposición. Contactadnos para una propuesta personalizada.",
        "EMAIL_BUTTON": "Enviar un Email",
        "PHONE_TEXT": "o llámanos al 616 131 411"
    },
    "FOOTER": {
        "COPYRIGHT": "Todos los derechos reservados."
    }
  }
};


@Injectable({
    providedIn: 'root'
})
export class TranslationService {
  language = signal<'ca' | 'es'>('ca');
  t = computed(() => allTranslations[this.language()]);

  constructor() {
    if (typeof navigator !== 'undefined' && navigator.language) {
        const browserLang = navigator.language.split('-')[0];
        const langToUse = browserLang.match(/ca|es/) ? browserLang as 'ca' | 'es' : 'ca';
        this.language.set(langToUse);
    }
  }

  useLanguage(language: 'ca' | 'es'): void {
    this.language.set(language);
  }
}