import { Injectable, signal, computed } from '@angular/core';

const allTranslations = {
    ca: {
        "HEADER": {
            "TITLE": "uSave Formació",
            "NAV": {
                "COURSES": "Cursos",
                "CALENDAR": "Calendari",
                "ABOUT": "Com Treballem",
                "TEAM": "El Nostre Equip",
                "SPACES": "Espais Cardioprotegits",
                "FAQ": "FAQs",
                "CONTACT": "Contacte"
            }
        },
        "HERO": {
            "TITLE": "Formació en primers auxilis i cardioprotecció per al teu <span class=\"text-red-600\">equip</span>",
            "SUBTITLE": "Cursos oficials de SVB + DEA, pràctics i impartits per instructors ERC. Ens desplacem a empreses, centres esportius i educatius de Barcelona.",
            "CTA_BUTTON": "Veure cursos"
        },
        "CONVERSION": {
            "BADGE": "Barcelona · Instructors acreditats ERC",
            "PRIMARY_CTA": "Demanar pressupost",
            "SECONDARY_CTA": "Veure cursos",
            "REASSURANCE": "Formació pràctica · Ens adaptem al vostre espai i horari · Proposta personalitzada",
            "AUDIENCE_TITLE": "Formació que s'adapta al teu entorn",
            "AUDIENCES": [
                { "title": "Empreses", "description": "Prepara el teu equip per actuar amb seguretat davant una emergència." },
                { "title": "Centres esportius", "description": "Formació i cardioprotecció per protegir esportistes, personal i famílies." },
                { "title": "Centres educatius", "description": "Sessions pràctiques i adaptades per a docents, alumnat i personal." }
            ],
            "CONTACT_REASSURANCE": "Explica'ns què necessiteu i us prepararem una proposta a mida."
        },
        "CLIENTS": {
            "EYEBROW": "Experiència sobre el terreny",
            "TITLE": "Entitats que han confiat en nosaltres",
            "SUBTITLE": "Treballem amb entitats esportives, educatives i comunitàries per crear espais més preparats i segurs.",
            "LIST": [
                { "name": "CrossFit Scorpion", "logo": "assets/images/clients/scorpion.png", "dark": true },
                { "name": "Autoescoles Hoy-Voy", "logo": "assets/images/clients/hoy-voy.png" },
                { "name": "Odicean", "logo": "assets/images/clients/odicean.png" },
                { "name": "Johan Cruyff Institute", "logo": "assets/images/clients/johan-cruyff-institute.png" },
                { "name": "Centre Mèdic Marina", "logo": "assets/images/clients/centre-medic-marina.jpeg" },
                { "name": "Centre Mèdic Ballester" }
            ]
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
                    "DURATION": "6 horas",
                    "DURATION_VALUE": "6 hores presencials",
                    "VALIDITY_LABEL": "Validesa",

                    "VALIDITY_VALUE": "2 anys",
                    "PRICE_LABEL": "Preu",
                    "PRICE": "79€ / persona"
                }, {
                    "id": "svb-dea-nooficial",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
                    "TITLE": "Curs de Primers Auxilis i Suport Vital Bàsic",
                    "OBJECTIVE": "Aquest curs proporciona la competència bàsica per afrontar situacions d'emergència. Els participants adquiriran la capacitat de reconèixer i gestionar una aturada cardiorespiratòria o una obstrucció de la via aèria mitjançant tècniques estandarditzades de reanimació i l'ús correcte del Desfibril·lador Extern Automàtic (DEA).",
                    "CONTENT_TITLE": "Contingut Clau (Enfocament Pràctic)",
                    "CONTENT_LIST": [
                        "Identificació Ràpida: Reconeixement immediat d'una aturada cardiorespiratòria.",
                        "Tècniques de Reanimació (RCP): Aplicació efectiva de la Reanimació Cardiopulmonar.",
                        "Maneig del DEA: Ús segur i eficient del Desfibril·lador Extern Automàtic.",
                        "Control de la Via Aèria: Actuació davant l'obstrucció (ennuegament) en diferents grups d'edat.",
                        "Estabilització: Aplicació de la Posició Lateral de Seguretat (PLS).",
                        "Activació del Sistema d'Emergències Mèdiques (SEM).",
                        "Escenaris Simulars: Pràctiques basades en contextos reals per reforçar la presa de decisions (empresarial, comunitari, esportiu, etc.)."
                    ],
                    "DURATION_LABEL": "Durada",
                    "DURATION": "4 horas",
                    "DURATION_VALUE": "4 hores presencials",

                    "PRICE_LABEL": "Preu",
                    "PRICE": "49€ / persona"
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
                    "id": "primers-a-mida",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V5.25a3.375 3.375 0 0 0-3.375-3.375H8.25a3.375 3.375 0 0 0-3.375 3.375v2.25\" /></svg>",
                    "TITLE": "Primers Auxilis a Mida",
                    "DESCRIPTION": "Ideal per a: Centres educatius, esportius o empreses amb necessitats específiques. Dissenyem un programa adaptat al vostre centre.",
                    "DURATION_LABEL": "Durada",
                    "DURATION": "A concretar segons programa",
                    "PRICE_LABEL": "Preu",
                    "PRICE": "100€ / hora"
                },
                {
                    "id": "lloguer-dea",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 10V3L4 14h7v7l9-11h-7Z\" /></svg>",
                    "TITLE": "Lloguer de DEA + Formació",
                    "DESCRIPTION": "DEA per al teu espai, instal·lació i formació per a un grup de fins a 8 persones.",
                    "DURATION_LABEL": "Modalitat",
                    "DURATION": "Quota mensual",
                    "PRICE_LABEL": "Preu",
                    "PRICE": "55€/mes + 90€ instal·lació"
                },
                {
                    "id": "compra-dea",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 10V3L4 14h7v7l9-11h-7Z\" /></svg>",
                    "TITLE": "Compra de DEA + Formació",
                    "DESCRIPTION": "Compra del DEA amb formació inicial inclosa per a un grup de fins a 8 persones.",
                    "DURATION_LABEL": "Modalitat",
                    "DURATION": "Pagament únic",
                    "PRICE_LABEL": "Preu",
                    "PRICE": "1.599€"
                },
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
                    "NAME": "Xavier",
                    "ROLE": "Infermer i Instructor ERC",
                    "IMAGE_URL": "assets/images/Xavi.jpg",
                    "DESCRIPTION": "Amb anys d'experiència en serveis d'urgències hospitalàries i emergencies extrahospitalaries, en Xavier aporta una perspectiva pràctica i realista a cada curs. La seva passió és ensenyar a actuar amb calma i eficàcia en moments crítics."
                },
                {
                    "NAME": "Marc",
                    "ROLE": "Infermer i Instructor ERC",
                    "IMAGE_URL": "assets/images/Marc.jpg",
                    "DESCRIPTION": "Amb experiéncia en pacient crític i urgències, en Marc té una gran vocació per la docència. El seu objectiu és que cada alumne se senti segur i preparat per aplicar els coneixements apresos."
                }
                ,
                {
                    "NAME": "Albert",
                    "ROLE": "Infermer i Instructor ERC",
                    "IMAGE_URL": "assets/images/Albert.jpg",
                    "DESCRIPTION": "Amb anys d'experiència en urgències hospitalàries, l'Albert ofereix un enfocament proper i pràctic, ajudant les persones a actuar amb seguretat i criteri quan més importa."
                }
            ]
        },
        "SPACES": {
            "TITLE": "Espais Cardioprotegits: Solució Integral",
            "TEASER": "Instal·lació, manteniment, registre i formació — la solució integral perquè el teu espai sigui realment cardioprotegit.",
            "CONTENT": "<p>No n'hi ha prou amb tenir un desfibril·lador; cal assegurar-se que l'equip estigui operatiu i que el personal sàpiga com actuar. Oferim un servei de gestió integral perquè el teu centre sigui un espai segur de debò, complint amb la normativa vigent (Decret 151/2012 de la Generalitat de Catalunya).</p><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">1. Assessorament i Venda de DEAs</h3><p class=\"mt-2 text-gray-700\">No tots els espais necessiten el mateix equipament. T’ajudem a triar el Desfibril·lador Extern Automàtic (DEA) que millor s’adapti a les teves instal·lacions:</p><ul class=\"list-disc list-inside space-y-2 ml-6\"><li>Equips d'última generació, fàcils d'utilitzar i amb instruccions per veu.</li><li>Models semiautomàtics o automàtics adaptats a entorns amb nens o adults.</li><li>Subministrament de vitrines, tòtems de rescat i senyalística homologada segons la normativa de visibilitat.</li></ul><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">2. Instal·lació i Alta Logística</h3><p class=\"mt-2 text-gray-700\">Ens encarreguem que el teu desfibril·lador estigui on ha d'estar i a punt per fer-se servir:</p><ul class=\"list-disc list-inside space-y-2 ml-6\"><li>Instal·lació professional: Col·locació en punts estratègics per garantir un temps de resposta inferior a 4 minuts.</li><li>Registre oficial: Tramitem l'alta del dispositiu davant les autoritats sanitàries i el Departament de Salut (obligatori per llei).</li><li>Senyalització oficial: Instal·lació de la cartelleria indicativa de \"Zona Cardioprotegida\" i rutes d'accés al DEA.</li></ul><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">3. Manteniment Preventiu i Correctiu</h3><p class=\"mt-2 text-gray-700\">Un DEA sense bateria o amb els elèctrodes caducats no salva vides. El nostre servei de manteniment et dona tranquil·litat absoluta:</p><ul class=\"list-disc list-inside space-y-2 ml-6\"><li>Revisions periòdiques: Comprovació de l'estat de la bateria, el programari i els consumibles (elèctrodes d'adult i pediàtrics).</li><li>Recanvis post-ús: Substitució immediata dels elèctrodes i el kit de rescat en cas d'utilització.</li><li>Actualitzacions de programari: Adaptem l'equip a les noves guies internacionals de reanimació sense cost addicional.</li></ul><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">4. Gestió de la Formació Contínua</h3><p class=\"mt-2 text-gray-700\">Un espai cardioprotegit requereix personal format. Lliguem la instal·lació dels equips amb el nostre pla de formació oficial, gestionant els reciclatges periòdics necessaris per mantenir les certificacions vigents i la confiança del teu equip.</p><p class=\"mt-4 text-gray-700 font-semibold\">Sabies que...? La supervivència davant d'una aturada cardíaca disminueix un 10% per cada minut que passa sense desfibril·lació. Un centre cardioprotegit és la diferència entre un ensurt i una vida salvada.</p><h3 class=\"mt-6 text-xl font-semibold text-gray-900\">Opcions i preus</h3><ul class=\"list-disc list-inside space-y-2 ml-6\"><li><strong>Lloguer de DEA + formació (8 persones):</strong> 55€/mes + 90€ d'instal·lació única</li><li><strong>Compra de DEA + formació (8 persones):</strong> 1.599€</li><li><strong>Manteniment bàsic de DEA:</strong> 150€/any</li><li><strong>Manteniment premium (amb reciclatge anual):</strong> 380€/any</li></ul>",
            "BUTTON_MORE_INFO": "Més informació",
            "SIDEBAR": {
                "CTA_TITLE": "Vols que t'ajudem?",
                "CTA_TEXT": "Contacta amb nosaltres per a una avaluació gratuïta del teu espai i pressupost personalitzat.",
                "EMAIL_LABEL": "Enviar Email",
                "CONTACT_LABEL": "Contacte",
                "FOOTER_TEXT": "També oferim servei complet d'instal·lació, manteniment i formació per empreses, escoles i entitats."
            }
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
                    "answer": "Els cursos de primers auxilis i SVB estan dissenyats per grups de fins a 18 persones, tot i que és possible adaptar-los a grups més petits o grans en funció del context."
                },
                {
                    "question": "Es poden programar cursos recurrents o en calendari?",
                    "answer": "Sí. Oferim la possibilitat d'establir un calendari de formacions regular (trimestral, semestral o anual), especialment útil per escoles, ajuntaments o empreses amb alta rotació de personal."
                }
            ]
        },
        "CALENDAR": {
            "TITLE": "Calendari de Cursos",
            "SUBTITLE": "Consulta les properes dates i reserva la teva plaça."
        },
        "CONTACT": {
            "TITLE": "Contacte i Properes Passes",
            "SUBTITLE": "Si la vostra entitat té interès en oferir formació, estem a la vostra disposició. Contacteu-nos per a una proposta personalitzada.",
            "EMAIL_BUTTON": "Enviar un Email",
            "PHONE_TEXT": ""
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
                "CALENDAR": "Calendario",
                "ABOUT": "Cómo Trabajamos",
                "TEAM": "Nuestro Equipo",
                "SPACES": "Espacios Cardioprotegidos",
                "FAQ": "FAQs",
                "CONTACT": "Contacto"
            }
        },
        "HERO": {
            "TITLE": "Formación en primeros auxilios y cardioprotección para tu <span class=\"text-red-600\">equipo</span>",
            "SUBTITLE": "Cursos oficiales de SVB + DEA, prácticos e impartidos por instructores ERC. Nos desplazamos a empresas, centros deportivos y educativos de Barcelona.",
            "CTA_BUTTON": "Ver cursos"
        },
        "CONVERSION": {
            "BADGE": "Barcelona · Instructores acreditados ERC",
            "PRIMARY_CTA": "Solicitar presupuesto",
            "SECONDARY_CTA": "Ver cursos",
            "REASSURANCE": "Formación práctica · Nos adaptamos a vuestro espacio y horario · Propuesta personalizada",
            "AUDIENCE_TITLE": "Formación que se adapta a tu entorno",
            "AUDIENCES": [
                { "title": "Empresas", "description": "Prepara a tu equipo para actuar con seguridad ante una emergencia." },
                { "title": "Centros deportivos", "description": "Formación y cardioprotección para proteger a deportistas, personal y familias." },
                { "title": "Centros educativos", "description": "Sesiones prácticas y adaptadas para docentes, alumnado y personal." }
            ],
            "CONTACT_REASSURANCE": "Cuéntanos qué necesitáis y os prepararemos una propuesta a medida."
        },
        "CLIENTS": {
            "EYEBROW": "Experiencia sobre el terreno",
            "TITLE": "Entidades que han confiado en nosotros",
            "SUBTITLE": "Trabajamos con entidades deportivas, educativas y comunitarias para crear espacios más preparados y seguros.",
            "LIST": [
                { "name": "CrossFit Scorpion", "logo": "assets/images/clients/scorpion.png", "dark": true },
                { "name": "Autoescuelas Hoy-Voy", "logo": "assets/images/clients/hoy-voy.png" },
                { "name": "Odicean", "logo": "assets/images/clients/odicean.png" },
                { "name": "Johan Cruyff Institute", "logo": "assets/images/clients/johan-cruyff-institute.png" },
                { "name": "Centre Médico Marina", "logo": "assets/images/clients/centre-medic-marina.jpeg" },
                { "name": "Centro Médico Ballester" }
            ]
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
                    "DURATION": "6 horas",
                    "DURATION_VALUE": "6 horas presenciales",
                    "VALIDITY_LABEL": "Validez",
                    "VALIDITY_VALUE": "2 años",
                    "PRICE_LABEL": "Precio",
                    "PRICE": "79€ / persona"
                },
                {
                    "id": "svb-dea-nooficial",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z\" /></svg>",
                    "TITLE": "Curso de Primeros Auxilios y Soporte Vital Básico",
                    "OBJECTIVE": "Este curso proporciona la competencia básica para afrontar situaciones de emergencia. Los participantes adquirirán la capacidad de reconocer y gestionar una parada cardiorrespiratoria o una obstrucción de la vía aérea mediante técnicas estandarizadas de reanimación y el uso correcto del Desfibrilador Externo Automático (DEA).",
                    "CONTENT_TITLE": "Contenido Clave (Enfoque Práctico)",
                    "CONTENT_LIST": [
                        "Identificación Rápida: Reconocimiento inmediato de una parada cardiorrespiratoria.",
                        "Técnicas de Reanimación (RCP): Aplicación efectiva de la Reanimación Cardiopulmonar.",
                        "Manejo del DEA: Uso seguro y eficiente del Desfibrilador Externo Automático.",
                        "Control de la Vía Aérea: Actuación ante la obstrucción (atragantamiento) en distintos grupos de edad.",
                        "Estabilización: Aplicación de la Posición Lateral de Seguridad (PLS).",
                        "Activación del Sistema de Emergencias Médicas (SEM).",
                        "Escenarios Simulados: Prácticas basadas en contextos reales para reforzar la toma de decisiones (empresarial, comunitario, deportivo, etc.)."
                    ],
                    "DURATION_LABEL": "Duración",
                    "DURATION": "4 horas",
                    "DURATION_VALUE": "4 horas presenciales",
                    "PRICE_LABEL": "Precio",
                    "PRICE": "49€ / persona"
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
                    "id": "primers-a-mida",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V5.25a3.375 3.375 0 0 0-3.375-3.375H8.25a3.375 3.375 0 0 0-3.375 3.375v2.25\" /></svg>",
                    "TITLE": "Primeros Auxilios a Medida",
                    "DESCRIPTION": "Ideal para: Centros educativos, deportivos o empresas con necesidades específicas. Diseñamos un programa adaptado exclusivamente a vuestro centro.",
                    "DURATION_LABEL": "Duración",
                    "DURATION": "A concretar según programa",
                    "PRICE_LABEL": "Precio",
                    "PRICE": "100€ / hora"
                },
                {
                    "id": "alquiler-dea",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 10V3L4 14h7v7l9-11h-7Z\" /></svg>",
                    "TITLE": "Alquiler de DEA + Formación",
                    "DESCRIPTION": "DEA para tu espacio, instalación y formación para un grupo de hasta 8 personas.",
                    "DURATION_LABEL": "Modalidad",
                    "DURATION": "Cuota mensual",
                    "PRICE_LABEL": "Precio",
                    "PRICE": "55€/mes + 90€ instalación"
                },
                {
                    "id": "compra-dea",
                    "ICON": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 mx-auto text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 10V3L4 14h7v7l9-11h-7Z\" /></svg>",
                    "TITLE": "Compra de DEA + Formación",
                    "DESCRIPTION": "Compra del DEA con formación inicial incluida para un grupo de hasta 8 personas.",
                    "DURATION_LABEL": "Modalidad",
                    "DURATION": "Pago único",
                    "PRICE_LABEL": "Precio",
                    "PRICE": "1.599€"
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
        "SPACES": {
            "TITLE": "Espacios Cardioprotegidos: Solución Integral",
            "TEASER": "Instalación, mantenimiento, registro y formación — la solución integral para que tu espacio sea realmente cardioprotegido.",
            "CONTENT": "<p>No basta con tener un desfibrilador; hay que asegurarse de que el equipo esté operativo y que el personal sepa cómo actuar. Ofrecemos un servicio de gestión integral para que tu centro sea un espacio realmente seguro, cumpliendo la normativa vigente (Decreto 151/2012 de la Generalitat de Cataluña).</p><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">1. Asesoramiento y Venta de DEAs</h3><p class=\"mt-2 text-gray-700\">No todos los espacios necesitan el mismo equipamiento. Te ayudamos a elegir el Desfibrilador Externo Automático (DEA) que mejor se adapte a tus instalaciones:</p><ul class=\"list-disc list-inside space-y-2 ml-6\"><li>Equipos de última generación, fáciles de usar y con instrucciones por voz.</li><li>Modelos semiautomáticos o automáticos adaptados a entornos con niños o adultos.</li><li>Suministro de vitrinas, tótems de rescate y señalización homologada según la normativa de visibilidad.</li></ul><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">2. Instalación y Alta Logística</h3><p class=\"mt-2 text-gray-700\">Nos encargamos de que tu desfibrilador esté donde debe estar y listo para usarse:</p><ul class=\"list-disc list-inside space-y-2 ml-6\"><li>Instalación profesional: Colocación en puntos estratégicos para garantizar un tiempo de respuesta inferior a 4 minutos.</li><li>Registro oficial: Tramitamos el alta del dispositivo ante las autoridades sanitarias y el Departament de Salut (obligatorio por ley).</li><li>Señalización oficial: Instalación de la cartelería indicativa de \"Zona Cardioprotegida\" y rutas de acceso al DEA.</li></ul><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">3. Mantenimiento Preventivo y Correctivo</h3><p class=\"mt-2 text-gray-700\">Un DEA sin batería o con los electrodos caducados no salva vidas. Nuestro servicio de mantenimiento te da tranquilidad absoluta:</p><ul class=\"list-disc list-inside space-y-2 ml-6\"><li>Revisiones periódicas: Comprobación del estado de la batería, el software y los consumibles (electrodos de adulto y pediátricos).</li><li>Repuestos post-uso: Sustitución inmediata de los electrodos y el kit de rescate en caso de utilización.</li><li>Actualizaciones de software: Adaptamos el equipo a las nuevas guías internacionales de reanimación sin coste adicional.</li></ul><h3 class=\"mt-4 text-xl font-semibold text-gray-900\">4. Gestión de la Formación Continua</h3><p class=\"mt-2 text-gray-700\">Un espacio cardioprotegido requiere personal formado. Vinculamos la instalación de los equipos con nuestro plan de formación oficial, gestionando los reciclajes periódicos necesarios para mantener las certificaciones vigentes y la confianza de tu equipo.</p><p class=\"mt-4 text-gray-700 font-semibold\">¿Sabías que...? La supervivencia ante una parada cardíaca disminuye un 10% por cada minuto que pasa sin desfibrilación. Un centro cardioprotegido es la diferencia entre un susto y una vida salvada.</p><h3 class=\"mt-6 text-xl font-semibold text-gray-900\">Opciones y precios</h3><ul class=\"list-disc list-inside space-y-2 ml-6\"><li><strong>Alquiler de DEA + formación (8 personas):</strong> 55€/mes + 90€ de instalación única</li><li><strong>Compra de DEA + formación (8 personas):</strong> 1.599€</li><li><strong>Mantenimiento básico de DEA:</strong> 150€/año</li><li><strong>Mantenimiento premium (con reciclaje anual):</strong> 380€/año</li></ul>",
            "BUTTON_MORE_INFO": "Más información",
            "SIDEBAR": {
                "CTA_TITLE": "¿Quieres que te ayudemos?",
                "CTA_TEXT": "Contacta con nosotros para una evaluación gratuita de tu espacio y presupuesto personalizado.",
                "EMAIL_LABEL": "Enviar Email",
                "CONTACT_LABEL": "Contacto",
                "FOOTER_TEXT": "También ofrecemos servicio completo de instalación, mantenimiento y formación para empresas, escuelas y entidades."
            }
        },
        "TEAM": {
            "TITLE": "Nuestro Equipo",
            "SUBTITLE": "Somos dos enfermeros con experiencia en emergencias, apasionados por la formación.",
            "MEMBERS": [
                {
                    "NAME": "Xavier",
                    "ROLE": "Enfermero e Instructor ERC",
                    "IMAGE_URL": "assets/images/Xavi.jpg",
                    "DESCRIPTION": "Con años de experiencia en servicios de urgencias hospitalarias y emergencias extrahospitalarias, Xavier aporta una perspectiva práctica y realista a cada curso. Su pasión es enseñar a actuar con calma y eficacia en momentos críticos."
                },
                {
                    "NAME": "Marc",
                    "ROLE": "Enfermero e Instructor ERC",
                    "IMAGE_URL": "assets/images/Marc.jpg",
                    "DESCRIPTION": "Con experiencia en paciente crítico y urgencias, Marc tiene una gran vocación por la docencia. Su objetivo es que cada alumno se sienta seguro y preparado para aplicar los conocimientos aprendidos."
                }
                ,
                {
                    "NAME": "Albert",
                    "ROLE": "Enfermero e Instructor ERC",
                    "IMAGE_URL": "assets/images/Albert.jpg",
                    "DESCRIPTION": "Con años de experiencia en urgencias hospitalarias, Albert ofrece un enfoque cercano y práctico, ayudando a las personas a actuar con seguridad y criterio cuando más importa."
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
                    "answer": "Los cursos de primeros auxilios y SVB están diseñados para grupos de hasta 18 personas, aunque es posible adaptarlos a grupos más pequeños o grandes en función del contexto."
                },
                {
                    "question": "¿Se pueden programar cursos recurrentes o en calendario?",
                    "answer": "Sí. Ofrecemos la posibilidad de establecer un calendario de formaciones regular (trimestral, semestral o anual), especialmente útil para escuelas, ayuntamientos o empresas con alta rotación de personal."
                }
            ]
        },
        "CALENDAR": {
            "TITLE": "Calendario de Cursos",
            "SUBTITLE": "Consulta las próximas fechas y reserva tu plaza."
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
        try {
            const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('usave_lang') : null;
            if (stored === 'ca' || stored === 'es') {
                this.language.set(stored as 'ca' | 'es');
                return;
            }
        } catch (e) {
            // ignore localStorage access errors
        }

        if (typeof navigator !== 'undefined' && navigator.language) {
            const browserLang = navigator.language.split('-')[0];
            const langToUse = browserLang.match(/ca|es/) ? browserLang as 'ca' | 'es' : 'ca';
            this.language.set(langToUse);
        }
    }

    useLanguage(language: 'ca' | 'es'): void {
        this.language.set(language);
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('usave_lang', language);
            }
        } catch (e) {
            // ignore localStorage write errors
        }
    }
}
