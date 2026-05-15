"use client";

import { useEffect } from "react";
import Image from "next/image";

declare global {
  interface Window {
    __bellChat?: { open: () => void; close: () => void; toggle: () => void };
  }
}

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

      const chat = createChat({
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

      if (chat) window.__bellChat = chat;
    `;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(n8nStyles)) document.head.removeChild(n8nStyles);
      if (document.head.contains(brandStyles)) document.head.removeChild(brandStyles);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const handleToggle = () => {
    // Use the n8n chat API if available; fallback to clicking the hidden toggle
    if (window.__bellChat?.toggle) {
      window.__bellChat.toggle();
    } else {
      document.querySelector<HTMLButtonElement>(".chat-toggle")?.click();
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="bell-toggle-btn"
      aria-label="Open bell.ai chat assistant"
    >
      {/* Glow ring */}
      <span className="bell-glow-ring" aria-hidden="true" />
      <Image
        src="/Emoji-bell-sem-fundo.png"
        alt=""
        width={60}
        height={60}
        className="bell-toggle-img"
        aria-hidden="true"
        priority
      />
    </button>
  );
}
