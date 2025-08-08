import { CONTACT_INFO } from './constants';

export const handleWhatsAppContact = () => {
  const message = "Hi! I'm interested in learning more about Surplus liquidation deals for corporate gifting. Can you provide more details?";
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const handleEmailContact = () => {
  const subject = "Inquiry about Corporate Gifting Solutions";
  const body = "Hi,\n\nI'm interested in learning more about Surplus liquidation deals for corporate gifting. Please provide more details about your bulk pricing and available products.\n\nThank you!";
  const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, '_blank');
};