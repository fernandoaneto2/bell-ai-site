"use client";

import { useEffect } from "react";

const WEBHOOK_URL =
  "https://duamorim.app.n8n.cloud/webhook/0e8d08c6-63f4-4ed8-9181-bc3a262d20b4/chat";

export default function ChatWidget() {
  useEffect(() => {
    const n8nCSS = document.createElement("link");
    n8nCSS.rel = "stylesheet";
    n8nCSS.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(n8nCSS);

    const bellCSS = document.createElement("link");
    bellCSS.rel = "stylesheet";
    bellCSS.href = "/bell-widget.css?v=24";
    document.head.appendChild(bellCSS);

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: '${WEBHOOK_URL}',
        mode: 'window',
        showWelcomeScreen: false,
        loadPreviousSession: false,
        defaultLanguage: 'en',
        initialMessages: [
          "Olá! Sou o Bell 🛎️ Posso ajudar com reservas, cardápio ou horários."
        ],
        i18n: {
          en: {
            title: 'Bell AI',
            subtitle: 'Online 24/7',
            footer: '',
            getStarted: 'Iniciar conversa',
            inputPlaceholder: 'Digite uma mensagem...',
            closeButtonTooltip: 'Fechar'
          }
        }
      });
    `;
    document.head.appendChild(script);

    return () => {
      [n8nCSS, bellCSS, script].forEach((el) => {
        if (document.head.contains(el)) document.head.removeChild(el);
      });
    };
  }, []);

  return null;
}
