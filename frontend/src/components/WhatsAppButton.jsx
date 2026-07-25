import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/918275453443?text=Hello%20Chaitanya%20Tech%20Solutions,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Chat with Us</span>
    </a>
  );
}
