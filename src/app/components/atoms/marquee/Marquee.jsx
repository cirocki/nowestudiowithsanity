"use client";
import styles from "./marquee.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
export default function Marquee() {
  useGSAP(() => {
    // clone text to animate
    const marqueedWrapper = document.querySelector(".js-marquee-wrapper");
    const marqueedText = document.querySelector(".js-marquee-text");

    const clonesNumber = 7;
    for (let index = 0; index < clonesNumber; index++) {
      marqueedWrapper.appendChild(marqueedText.cloneNode(true));
    }

    // animate text
    gsap.to(marqueedWrapper.children, {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  });
  return (
    <div className={styles.marquee}>
      <div className={`js-marquee-wrapper ${styles.marquee_wrapper}`}>
        <div className={`js-marquee-text ${styles.marquee_text}`}>
          <span>nowe.studio</span>
          <Image
            src="/img/svg/sparkle.svg"
            height={40}
            width={40}
            alt="ikona gwiazdki"
          />
        </div>
      </div>
    </div>
  );
}
