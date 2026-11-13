export interface BusinessRequest {
  name: string;
  email: string;
  company: string;
  location: string;
  participants: string;
  need: string;
  timing: string;
  phone: string;
}

export function requestEmail(data: BusinessRequest, language: 'ca' | 'es', source: string) {
  const ca = language === 'ca';
  const lines = ca ? [
    'Bon dia, voldria una proposta de formació per al nostre equip.',
    `Nom: ${data.name}`, `Correu: ${data.email}`, `Empresa o centre: ${data.company}`,
    `Població: ${data.location}`, `Participants aproximats: ${data.participants}`,
    `Necessitat: ${data.need}`, `Dates o termini: ${data.timing || 'Per concretar'}`,
    `Telèfon (opcional): ${data.phone || 'No indicat'}`,
    'Sol·licito que USAVE em respongui sobre aquesta proposta; no és una alta en publicitat.',
    `Origen del formulari: ${source}`
  ] : [
    'Hola, me gustaría recibir una propuesta de formación para nuestro equipo.',
    `Nombre: ${data.name}`, `Correo: ${data.email}`, `Empresa o centro: ${data.company}`,
    `Población: ${data.location}`, `Participantes aproximados: ${data.participants}`,
    `Necesidad: ${data.need}`, `Fechas o plazo: ${data.timing || 'Por concretar'}`,
    `Teléfono (opcional): ${data.phone || 'No indicado'}`,
    'Solicito que USAVE me responda sobre esta propuesta; no es un alta en publicidad.',
    `Origen del formulario: ${source}`
  ];
  const subject = ca ? 'Pressupost per a un equip · USAVE' : 'Presupuesto para un equipo · USAVE';
  const body = lines.join('\n\n');
  return { body, url: `mailto:formacio.usave@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}

export function campaignSource(params: { get(key: string): string | null }): string {
  const fields = ['utm_source', 'utm_medium', 'utm_campaign'].map(key => {
    const value = params.get(key);
    return value && /^[a-zA-Z0-9_-]{1,64}$/.test(value) ? `${key}=${value}` : '';
  }).filter(Boolean);
  return fields.length ? `Web empreses · ${fields.join(' · ')}` : 'Web empreses · directe';
}
