"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        anchors: true,
        autoRaf: true,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
