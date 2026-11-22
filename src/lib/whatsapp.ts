export const WHATSAPP_NUMBER = "5551994102121";
const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Conheci o SpaSu Iluminar pelo site e gostaria de saber mais sobre os atendimentos.";

export function whatsappLink(service?: string) {
  const message = service ? `Olá! Quero saber mais sobre ${service}.` : DEFAULT_WHATSAPP_MESSAGE;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function registrationWhatsAppLink(name: string, phone: string, email: string) {
  const message =
    `Olá! Gostaria de me registrar no SpaSu Iluminar.\n\n` +
    `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
