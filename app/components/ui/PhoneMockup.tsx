"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";
import { demoMessages, HOTEL_NAME } from "@content/demo-conversation";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  preview?: boolean; // true = show first 3 messages statically (for Hero)
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

  const messages = preview ? demoMessages.slice(0, 3) : demoMessages.slice(0, visibleCount);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      {/* Phone shell */}
      <div
        className="relative bg-[#1a1a1a] rounded-[2.75rem] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)]"
        style={{
          width: "min(320px, 85vw)",
          height: "min(620px, 75vh)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(201,162,76,0.05)",
        }}
        role="img"
        aria-label="WhatsApp conversation demo with bell.ai AI concierge"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" aria-hidden="true" />

        {/* WhatsApp header */}
        <div className="flex items-center gap-3 px-4 pt-8 pb-3 bg-[#1f2c33]">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-bg-primary text-xs font-bold flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #8B6F2E 0%, #C9A24C 40%, #E5C580 70%, #C9A24C 100%)",
            }}
            aria-hidden="true"
          >
            B
          </div>
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
                {/* Main text */}
                <p style={{ whiteSpace: "pre-line" }}>{msg.text}</p>

                {/* Image placeholder */}
                {msg.isImage && (
                  <div
                    className="mt-2 rounded-lg bg-[#2a3942] flex items-center justify-center"
                    style={{ height: 80 }}
                    aria-label="Photo carousel placeholder"
                  >
                    <span className="text-gray-muted text-[10px]">[ PHOTO CAROUSEL ]</span>
                  </div>
                )}

                {/* Options list */}
                {msg.isOptions && msg.options && (
                  <ul className="mt-1.5 space-y-0.5" aria-label="Room options">
                    {msg.options.map((opt, oi) => (
                      <li key={oi} className="text-white-soft">{opt}</li>
                    ))}
                  </ul>
                )}

                {/* Bullet list */}
                {msg.isBullets && msg.bullets && (
                  <ul className="mt-1 list-disc list-inside space-y-0.5" aria-label="Additional services">
                    {msg.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Timestamp */}
              <span className="text-[10px] text-[#8696a0] px-1">{msg.time}</span>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && !preview && (
            <div className="flex items-center gap-1.5 self-start bg-[#202c33] rounded-xl rounded-bl-sm px-3 py-2" aria-label="bell.ai is typing">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gray-muted animate-blink"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>
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
