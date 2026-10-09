// src/utils/whatsapp.js
export const WHATSAPP_NUMBER = "918527378513"; // India ka code 91 lagaya hai

export const getWhatsAppLink = (message = "Hello Prime Cool Service, mujhe apne appliance ki servicing karani hai.") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};