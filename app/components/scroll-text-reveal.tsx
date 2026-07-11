"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type ScrollTextRevealProps = {
  children: ReactNode;
  className?: string;
  progress?: number;
  edgeWidth?: number;
};

export function ScrollTextReveal({
  children,
  className = "",
  progress: controlledProgress,
  edgeWidth = 5,
}: ScrollTextRevealProps) {
  const text = useMemo(() => {
    if (typeof children === "string" || typeof children === "number") {
      return String(children).replace(/\s+/g, " ").trim();
    }

    return "";
  }, [children]);
  const textRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const idleTimeoutRef = useRef<number | null>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [highlightStrength, setHighlightStrength] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateProgress() {
      if (typeof controlledProgress === "number") {
        return;
      }

      const text = textRef.current;

      if (!text) {
        return;
      }

      const rect = text.getBoundingClientRect();
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top + scrollTop;
      const start = elementTop - viewportHeight * 0.92;
      const end = elementTop - viewportHeight * 0.18;
      const nextProgress = Math.min(
        Math.max((scrollTop - start) / (end - start), 0),
        1,
      );
      const resolvedProgress = reduceMotion.matches ? 1 : nextProgress;

      if (Math.abs(progressRef.current - resolvedProgress) > 0.002) {
        progressRef.current = resolvedProgress;
        setProgress(resolvedProgress);
      }
    }

    function track() {
      if (typeof controlledProgress !== "number") {
        updateProgress();
      }

      frameRef.current = window.requestAnimationFrame(track);
    }

    function handleScroll() {
      setHighlightStrength(1);

      if (fadeFrameRef.current !== null) {
        window.cancelAnimationFrame(fadeFrameRef.current);
        fadeFrameRef.current = null;
      }

      if (idleTimeoutRef.current !== null) {
        window.clearTimeout(idleTimeoutRef.current);
      }

      idleTimeoutRef.current = window.setTimeout(() => {
        const fadeStart = performance.now();
        const fadeDuration = 420;

        function fadeHighlight(now: number) {
          const fadeProgress = Math.min((now - fadeStart) / fadeDuration, 1);
          const easedProgress = 1 - (1 - fadeProgress) ** 3;

          setHighlightStrength(1 - easedProgress);

          if (fadeProgress < 1) {
            fadeFrameRef.current = window.requestAnimationFrame(fadeHighlight);
          } else {
            fadeFrameRef.current = null;
          }
        }

        fadeFrameRef.current = window.requestAnimationFrame(fadeHighlight);
      }, 120);

      updateProgress();
    }

    updateProgress();
    if (typeof controlledProgress !== "number") {
      frameRef.current = window.requestAnimationFrame(track);
    }

    const scrollOptions: AddEventListenerOptions = {
      capture: true,
      passive: true,
    };

    window.addEventListener("scroll", handleScroll, scrollOptions);
    document.addEventListener("scroll", handleScroll, scrollOptions);
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("orientationchange", handleScroll);
    window.visualViewport?.addEventListener("resize", handleScroll);
    reduceMotion.addEventListener("change", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll, scrollOptions);
      document.removeEventListener("scroll", handleScroll, scrollOptions);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("orientationchange", handleScroll);
      window.visualViewport?.removeEventListener("resize", handleScroll);
      reduceMotion.removeEventListener("change", updateProgress);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (idleTimeoutRef.current !== null) {
        window.clearTimeout(idleTimeoutRef.current);
      }

      if (fadeFrameRef.current !== null) {
        window.cancelAnimationFrame(fadeFrameRef.current);
      }
    };
  }, [controlledProgress]);

  const resolvedProgress = Math.min(
    Math.max(controlledProgress ?? progress, 0),
    1,
  );
  const edgeRed = Math.round(143 + (156 - 143) * highlightStrength);
  const edgeGreen = Math.round(143 + (255 - 143) * highlightStrength);
  const edgeBlue = Math.round(143 + (122 - 143) * highlightStrength);

  function mixColor(from: number[], to: number[], amount: number) {
    const clampedAmount = Math.min(Math.max(amount, 0), 1);

    return from.map((channel, index) =>
      Math.round(channel + (to[index] - channel) * clampedAmount),
    );
  }

  function getColor(position: number) {
    const revealed = [0, 0, 0];
    const edge = [edgeRed, edgeGreen, edgeBlue];
    const muted = [189, 189, 189];

    if (resolvedProgress <= 0.01) {
      return `rgb(${muted.join(" ")})`;
    }

    if (resolvedProgress >= 0.99) {
      return `rgb(${revealed.join(" ")})`;
    }

    const revealPosition = Math.min(Math.max(resolvedProgress * 1.18 - 0.09, 0), 1);
    const edgeSize = Math.min(Math.max(edgeWidth / 100, 0.03), 0.45);
    const edgeStart = revealPosition - edgeSize;
    const edgeEnd = revealPosition + edgeSize;

    if (position <= edgeStart) {
      return `rgb(${revealed.join(" ")})`;
    }

    if (position >= edgeEnd) {
      return `rgb(${muted.join(" ")})`;
    }

    const edgeProgress = (position - edgeStart) / (edgeEnd - edgeStart);
    const color =
      edgeProgress < 0.5
        ? mixColor(revealed, edge, edgeProgress * 2)
        : mixColor(edge, muted, (edgeProgress - 0.5) * 2);

    return `rgb(${color.join(" ")})`;
  }

  if (!text) {
    return (
      <span ref={textRef} className={className}>
        {children}
      </span>
    );
  }

  const characters = Array.from(text);
  const visibleCharacterCount = characters.filter((character) =>
    /\S/.test(character),
  ).length;
  let visibleCharacterIndex = 0;

  const renderedCharacters = characters.map((character, index) => {
    if (!/\S/.test(character)) {
      return character;
    }

    const position =
      visibleCharacterCount <= 1
        ? 0
        : visibleCharacterIndex / (visibleCharacterCount - 1);
    const color = getColor(position);

    visibleCharacterIndex += 1;

    return (
      <span key={`${character}-${index}`} style={{ color }}>
        {character}
      </span>
    );
  });

  return (
    <span ref={textRef} className={`inline ${className}`}>
      {renderedCharacters}
    </span>
  );
}
