"use client";

import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export function Providers({ children }) {
  return (
    <TransitionRouter
      leave={(next) => {
        const tween = gsap.fromTo(
          "main",
          { autoAlpha: 1 },
          { autoAlpha: 0, onComplete: next }
        );
        return () => tween.kill();
      }}
      enter={(next) => {
        const tween = gsap.fromTo(
          "main",
          { autoAlpha: 0 },
          { autoAlpha: 1, onComplete: next }
        );
        return () => tween.kill();
      }}
    >
      {children}
    </TransitionRouter>
  );
}
