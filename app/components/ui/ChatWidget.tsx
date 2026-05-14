"use client";

import { useEffect } from "react";

const WEBHOOK_URL = "https://duamorim.app.n8n.cloud/webhook/5ecd9dc9-dd34-490b-8011-349e7b4e98fa/chat";

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
