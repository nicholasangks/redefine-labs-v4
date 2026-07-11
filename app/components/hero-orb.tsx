"use client";

import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

type OrbStyle = CSSProperties & {
  "--orb-rotate-x"?: string;
  "--orb-rotate-y"?: string;
  "--orb-scale-x"?: string;
  "--orb-scale-y"?: string;
  "--blue-x"?: string;
  "--blue-y"?: string;
  "--orange-x"?: string;
  "--orange-y"?: string;
  "--blue-opacity"?: string;
  "--orange-opacity"?: string;
};

export function HeroOrb() {
  const frameRef = useRef<number | null>(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [style, setStyle] = useState<OrbStyle>({
    "--orb-rotate-x": "0deg",
    "--orb-rotate-y": "0deg",
    "--orb-scale-x": "1",
    "--orb-scale-y": "1",
    "--blue-x": "0px",
    "--blue-y": "0px",
    "--orange-x": "0px",
    "--orange-y": "0px",
    "--blue-opacity": "1",
    "--orange-opacity": "1",
  });

  useEffect(() => {
    function animate() {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      const rotateY = current.x * 6;
      const rotateX = current.y * -6;
      const scaleX = 1 + Math.abs(current.x) * 0.035;
      const scaleY = 1 + Math.abs(current.y) * 0.05;
      const distance = Math.min(
        Math.sqrt(current.x * current.x + current.y * current.y),
        1,
      );
      const glowOpacity = Math.max(1 - distance * 0.55, 0.38);

      setStyle({
        "--orb-rotate-x": `${rotateX.toFixed(2)}deg`,
        "--orb-rotate-y": `${rotateY.toFixed(2)}deg`,
        "--orb-scale-x": scaleX.toFixed(3),
        "--orb-scale-y": scaleY.toFixed(3),
        "--blue-x": `${(current.x * 22).toFixed(2)}px`,
        "--blue-y": `${(current.y * 14).toFixed(2)}px`,
        "--orange-x": `${(current.x * -16).toFixed(2)}px`,
        "--orange-y": `${(current.y * 22).toFixed(2)}px`,
        "--blue-opacity": glowOpacity.toFixed(3),
        "--orange-opacity": (glowOpacity * 0.95).toFixed(3),
      });

      frameRef.current = window.requestAnimationFrame(animate);
    }

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function handleMouseMove(event: ReactMouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    targetRef.current = {
      x: Math.max(-1, Math.min(relativeX * 2, 1)),
      y: Math.max(-1, Math.min(relativeY * 2, 1)),
    };
  }

  function handleMouseLeave() {
    targetRef.current = { x: 0, y: 0 };
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // className="relative mx-auto flex w-full max-w-[380px] items-center justify-center"
      className="relative mx-auto flex w-[70%] md:w-[clamp(12rem,26.5vw,26rem)] items-center justify-center"
    >
      <div className="absolute h-px w-[calc(100%+5rem)] md:w-[calc(100%+10rem)] -rotate-45 bg-[#D5D5D5]"></div>

      <div className="flex h-auto w-full aspect-square items-center justify-center rounded-full border border-[#D5D5D5]">
        <div className="relative h-auto w-[60%] aspect-square -rotate-45 rounded-full border border-[#D5D5D5]">
          <div className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-[#D5D5D5]"></div>
          <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full border border-[#D5D5D5] bg-white"></div>
        </div>
      </div>

      <div
        style={style}
        className="absolute flex h-auto w-[40%] md:w-[35%] aspect-square items-center justify-center rounded-full rotate-45 bg-white [transform:perspective(900px)_rotateX(var(--orb-rotate-x))_rotateY(var(--orb-rotate-y))_scaleX(var(--orb-scale-x))_scaleY(var(--orb-scale-y))] [transition:box-shadow_300ms_ease]"
      >
        {/* <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.98)_0%,rgba(252,252,252,0.96)_68%,rgba(243,243,243,0.92)_100%)]"></div>
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(255,255,255,0.7)]"></div> */}
        <div className="absolute top-[20%] h-auto w-[30%] aspect-square rounded-full bg-[#91BBFC] opacity-[var(--blue-opacity)] blur-[20px] [transform:translate3d(var(--blue-x),var(--blue-y),0)]"></div>
        <div className="absolute bottom-[20%] h-auto w-[30%] aspect-square rounded-full bg-[#FDD29D] opacity-[var(--orange-opacity)] blur-[20px] [transform:translate3d(var(--orange-x),var(--orange-y),0)]"></div>
      </div>
    </div>
  );
}
