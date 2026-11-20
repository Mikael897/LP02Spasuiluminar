export const WHATSAPP_NUMBER = "5551994102121";
const WHATSAPP_MESSAGE =
  "Olá! Conheci o SpaSu Iluminar pelo site e gostaria de saber mais sobre os atendimentos.";

export function whatsappLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
