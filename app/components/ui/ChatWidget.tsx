"use client";

import { useEffect } from "react";

const WEBHOOK_URL =
  "https://duamorim.app.n8n.cloud/webhook/0e8d08c6-63f4-4ed8-9181-bc3a262d20b4/chat";

export default function ChatWidget() {
  useEffect(() => {
    const n8nStyles = document.createElement("link");
    n8nStyles.rel = "stylesheet";
    n8nStyles.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(n8nStyles);

    const brandStyles = document.createElement("link");
    brandStyles.rel = "stylesheet";
    brandStyles.href = "/bell-widget.css";
    document.head.appendChild(brandStyles);

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: '${WEBHOOK_URL}',
        mode: 'window',
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
          'Welcome to bell.ai. 🛎️',
          "Ask me about our product, pricing, or book a demo — I'm here to help."
        ],
        i18n: {
          en: {
            title: 'Bell AI',
            subtitle: '',
            footer: '',
            getStarted: 'Start chatting',
            inputPlaceholder: 'Ask anything...',
            closeButtonTooltip: 'Close',
          },
        },
      });
    `;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(n8nStyles)) document.head.removeChild(n8nStyles);
      if (document.head.contains(brandStyles)) document.head.removeChild(brandStyles);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return null;
}
