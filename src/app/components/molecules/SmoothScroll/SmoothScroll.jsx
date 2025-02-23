"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
