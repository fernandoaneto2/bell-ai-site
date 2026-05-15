"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";
import { demoMessages, HOTEL_NAME } from "@content/demo-conversation";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  preview?: boolean; // true = show website-with-chat-open (Hero); false = animated WhatsApp demo (LiveDemo)
  onReady?: () => void;
}

const TYPING_DELAY = 1400;
const MSG_DELAY = 600;

export default function PhoneMockup({ preview = false }: PhoneMockupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px" });
  const [visibleCount, setVisibleCount] = useState(preview ? 3 : 0);
  const [typing, setTyping] = useState(false);
  const [played, setPlayed] = useState(false);
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];
  };

  const playAnimation = useCallback(() => {
    clearTimers();
    setVisibleCount(0);
    setTyping(false);

    let time = 500;
    demoMessages.forEach((msg, i) => {
      const typingStart = time;
      const showMsg = time + TYPING_DELAY;
      const next = showMsg + MSG_DELAY;

      // Show typing indicator before bot messages
      if (msg.role === "bot") {
        const t1 = setTimeout(() => setTyping(true), typingStart);
        timerRefs.current.push(t1);
      }

      const t2 = setTimeout(() => {
        setTyping(false);
        setVisibleCount(i + 1);
      }, showMsg);
      timerRefs.current.push(t2);

      time = next + (msg.role === "bot" ? 200 : 0);
    });
  }, []);

  useEffect(() => {
    if (preview) return;
    if (isInView && !played) {
      setPlayed(true);
      playAnimation();
    }
    if (!isInView) {
      setPlayed(false);
    }
    return clearTimers;
  }, [isInView, played, preview, playAnimation]);

  const handleReplay = () => {
    setPlayed(false);
    setVisibleCount(0);
    setTimeout(() => {
      setPlayed(true);
      playAnimation();
    }, 100);
  };

  const messages = demoMessages.slice(0, visibleCount);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      {/* Phone shell */}
      <div
        className="relative bg-[#111] rounded-[2.75rem] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)]"
        style={{
          width: "min(320px, 85vw)",
          height: "min(620px, 75vh)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(201,162,76,0.05)",
        }}
        role="img"
        aria-label={preview ? "Website with bell.ai chat open" : "WhatsApp conversation demo with bell.ai"}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" aria-hidden="true" />

        {preview ? (
          /* ── Hero mode: website-in-phone ── */
          <div className="flex flex-col h-full pt-6">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-b border-[rgba(255,255,255,0.06)]">
              <div className="flex gap-1" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-[#0d0d0d] rounded-full text-[8px] text-[#555] px-3 py-0.5 text-center truncate">
                restauranteharbor.com.br
              </div>
            </div>

            {/* Website body */}
            <div className="flex-1 bg-[#0a0a0a] relative overflow-hidden">
              {/* Site navbar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-black border-b border-[rgba(255,255,255,0.05)]">
                <span className="text-white text-[9px] font-bold tracking-wider">HARBOR RESTAURANT</span>
                <div className="flex gap-3">
                  {["Menu", "About", "Reserve"].map((l) => (
                    <span key={l} className="text-[7px] text-[#666]">{l}</span>
                  ))}
                </div>
              </div>

              {/* Hero image block */}
              <div className="relative h-28 overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1a0a00 0%, #0d0d0d 100%)" }}>
                <span className="text-5xl opacity-60" aria-hidden="true">🍽️</span>
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>

              {/* Skeleton content lines */}
              <div className="px-4 py-3 flex flex-col gap-2">
                <div className="h-2 w-3/4 rounded-full bg-[rgba(255,255,255,0.12)]" />
                <div className="h-1.5 w-1/2 rounded-full bg-[rgba(255,255,255,0.07)]" />
                <div className="h-1.5 w-2/3 rounded-full bg-[rgba(255,255,255,0.05)]" />
              </div>

              {/* ── Bell.ai chat widget (open) ── */}
              <div
                className="absolute bottom-3 right-3 rounded-2xl border border-[rgba(201,162,76,0.3)] bg-[#0d0d0d] overflow-hidden"
                style={{ width: 148, boxShadow: "0 8px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,162,76,0.1)" }}
              >
                {/* Chat header */}
                <div className="flex items-center gap-1.5 px-2.5 py-2 bg-[#0a0a0a] border-b border-[rgba(201,162,76,0.15)]">
                  <span className="text-[11px]" aria-hidden="true">🛎️</span>
                  <div>
                    <p className="text-[8px] text-white font-semibold leading-none">Bell AI</p>
                    <p className="text-[6px] text-green-400 flex items-center gap-0.5 mt-0.5">
                      <span className="w-1 h-1 rounded-full bg-green-400 inline-block animate-pulse" aria-hidden="true" />
                      Online 24/7
                    </p>
                  </div>
                  <div className="ml-auto w-3 h-3 flex items-center justify-center opacity-40 cursor-pointer">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex flex-col gap-1.5 p-2">
                  <div className="bg-[#1a1a1a] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[95%]">
                    <p className="text-[7px] text-[#e8e8e8] leading-relaxed">
                      Olá! Sou o Bell 🛎️ Posso ajudar com reservas, cardápio ou horários.
                    </p>
                  </div>
                  <div className="bg-[#c9a24c] rounded-xl rounded-tr-sm px-2 py-1 self-end max-w-[85%]">
                    <p className="text-[7px] text-black font-semibold">Mesa pra 2, sábado 20h</p>
                  </div>
                  <div className="bg-[#1a1a1a] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[95%]">
                    <p className="text-[7px] text-[#e8e8e8] leading-relaxed">
                      Perfeito! Mesa reservada pra sábado às 20h ✅ Confirmo no WhatsApp!
                    </p>
                  </div>
                </div>

                {/* Typing dots */}
                <div className="flex items-center gap-1 px-3 py-1">
                  {[0, 0.2, 0.4].map((d, i) => (
                    <span
                      key={i}
                      className="w-1 h-1 rounded-full bg-[#555] animate-bounce"
                      style={{ animationDelay: `${d}s` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-1 px-2 pb-2">
                  <div className="flex-1 bg-[#111] rounded-full px-2 py-1 text-[6.5px] text-[#444] border border-[rgba(201,162,76,0.12)]">
                    Digite uma mensagem...
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[#c9a24c] flex items-center justify-center flex-shrink-0">
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bell toggle button (visible on site) */}
              <div
                className="absolute bottom-3 right-3 translate-x-[calc(100%+8px)]"
                style={{ display: "none" }}
                aria-hidden="true"
              />
            </div>
          </div>
        ) : (
          /* ── LiveDemo mode: animated WhatsApp ── */
          <>
            {/* WhatsApp header */}
            <div className="flex items-center gap-3 px-4 pt-8 pb-3 bg-[#1f2c33]">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-bg-primary text-xs font-bold flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #8B6F2E 0%, #C9A24C 40%, #E5C580 70%, #C9A24C 100%)" }}
                aria-hidden="true"
              >B</div>
              <div className="flex-1 min-w-0">
                <p className="text-white-pure text-sm font-semibold truncate">{HOTEL_NAME}</p>
                <p className="text-[#8696a0] text-xs">bell.ai · Online</p>
              </div>
            </div>

            {/* Chat area */}
            <div
              className="flex flex-col gap-2 px-3 py-3 overflow-y-auto h-[calc(100%-90px)]"
              style={{ background: "#0b141a" }}
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-[82%] gap-0.5",
                    msg.role === "guest" ? "self-end items-end" : "self-start items-start"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-xl px-3 py-2 text-xs leading-relaxed",
                      msg.role === "guest"
                        ? "bg-[#005c4b] text-white-soft rounded-br-sm"
                        : "bg-[#202c33] text-white-soft rounded-bl-sm"
                    )}
                  >
                    <p style={{ whiteSpace: "pre-line" }}>{msg.text}</p>
                    {msg.isImage && (
                      <div className="mt-2 rounded-lg bg-[#2a3942] flex items-center justify-center" style={{ height: 80 }}>
                        <span className="text-gray-muted text-[10px]">[ PHOTO CAROUSEL ]</span>
                      </div>
                    )}
                    {msg.isOptions && msg.options && (
                      <ul className="mt-1.5 space-y-0.5" aria-label="Room options">
                        {msg.options.map((opt, oi) => <li key={oi} className="text-white-soft">{opt}</li>)}
                      </ul>
                    )}
                    {msg.isBullets && msg.bullets && (
                      <ul className="mt-1 list-disc list-inside space-y-0.5">
                        {msg.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                  <span className="text-[10px] text-[#8696a0] px-1">{msg.time}</span>
                </div>
              ))}

              {typing && (
                <div className="flex items-center gap-1.5 self-start bg-[#202c33] rounded-xl rounded-bl-sm px-3 py-2" aria-label="bell.ai is typing">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-muted animate-blink" style={{ animationDelay: `${i * 0.2}s` }} aria-hidden="true" />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Replay button — only in animated mode */}
      {!preview && (
        <button
          onClick={handleReplay}
          className="text-xs text-gray-muted hover:text-gold-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-primary rounded-sm px-3 py-1"
          aria-label="Replay demo conversation"
        >
          ↺ Replay
        </button>
      )}
    </div>
  );
}
