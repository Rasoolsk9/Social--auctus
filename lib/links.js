export const CONTACT = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15551234567", // e.g., 919999999999 (country code + number)
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "socialauctus",
  email: process.env.NEXT_PUBLIC_EMAIL || "hi@socialauctus.com",
  calendly: process.env.NEXT_PUBLIC_CALENDLY || "https://calendly.com/your-team/intro-call"
};

export const waLink = (text = "Hi Social Auctus — I’d like to discuss our social growth.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const igLink = () => `https://instagram.com/${CONTACT.instagram}`;
export const mailLink = (subject = "New project enquiry") =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Tell us about your goals:")}`;
