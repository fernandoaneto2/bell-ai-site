"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const WEBHOOK_URL =
  "https://duamorim.app.n8n.cloud/webhook/0e8d08c6-63f4-4ed8-9181-bc3a262d20b4/chat";

export default function ChatWidget() {
  const n8nToggle = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    /* 1 — n8n base styles */
    const n8nCSS = document.createElement("link");
    n8nCSS.rel = "stylesheet";
    n8nCSS.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(n8nCSS);

    /* 2 — bell.ai brand override */
    const bellCSS = document.createElement("link");
    bellCSS.rel = "stylesheet";
    bellCSS.href = "/bell-widget.css";
    document.head.appendChild(bellCSS);

    /* 3 — init chat (exact snippet) */
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
          "Welcome to Harbor Catch.",
          "Ask me about our menu, hours, or book a table — I'm here to help."
        ],
        i18n: {
          en: {
            title: 'Bell AI',
            subtitle: '',
            footer: '',
            getStarted: 'Start chatting',
            inputPlaceholder: 'Ask anything...',
            closeButtonTooltip: 'Close'
          }
        }
      });
    `;
    document.head.appendChild(script);

    /* 4 — wait for n8n to render its toggle, then cache it */
    const observer = new MutationObserver(() => {
      const btn = document.querySelector<HTMLButtonElement>(".chat-toggle");
      if (btn) {
        n8nToggle.current = btn;
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      [n8nCSS, bellCSS, script].forEach((el) => {
        if (document.head.contains(el)) document.head.removeChild(el);
      });
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => n8nToggle.current?.click()}
      aria-label="Abrir chat bell.ai"
      className="bell-fab"
    >
      <Image
        src="/Emoji-bell-sem-fundo.png"
        alt=""
        width={68}
        height={68}
        priority
        aria-hidden="true"
        className="bell-fab__img"
      />
    </button>
  );
}
