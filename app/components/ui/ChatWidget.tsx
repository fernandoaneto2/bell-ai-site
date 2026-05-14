"use client";

import { useEffect } from "react";

// Replace with your n8n Chat Trigger webhook URL before going live
const WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL";

export default function ChatWidget() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: '${WEBHOOK_URL}',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          'Olá! Sou o Bell, seu concierge virtual 24/7. 🛎️',
          'Como posso ajudar hoje?'
        ],
        i18n: {
          en: {
            title: 'Bell AI',
            subtitle: 'Concierge virtual · 24/7',
            footer: '',
            getStarted: 'Iniciar conversa',
            inputPlaceholder: 'Digite sua mensagem...',
            closeButtonTooltip: 'Fechar',
          },
        },
      });
    `;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return null;
}
