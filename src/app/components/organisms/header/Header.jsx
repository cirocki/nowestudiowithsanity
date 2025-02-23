"use client";
import React, { useEffect, useState, useRef } from "react";
import Container from "../../atoms/container/Container";
import Branding from "./Branding";
import CTA from "./CTA";
import styles from "./header-styles.module.scss";
import NavLInks from "./NavLInks";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  gsap.registerPlugin(useGSAP);

  // State of our Menu
  const [isOpen, setIsOpen] = useState(false);
  // Handle menu
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  // Close menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close on resize
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  const header = useRef();
  const tl = useRef();
  const mm = gsap.matchMedia();

  useGSAP(
    () => {
      mm.add("(max-width: 1099px)", () => {
        tl.current = gsap
          .timeline()
          .to(".header-overlay", {
            height: "calc(100dvh - 80px)",
            left: 0,
            width: "100vw",
            duration: 0.4,
            ease: "expo.inOut",
          })
          .to(".header-grid-ref", {
            height: "100dvh",
          })
          .to(".link_ref", { autoAlpha: 1 })
          .to(
            ".hr_ref",
            { scaleX: 1, stagger: 0.2, duration: 0.4, ease: "circ.out" },
            "<"
          )
          .to(".cta_ref", {
            autoAlpha: 1,
          })
          .reverse();
      });
    },
    {
      scope: header,
    }
  );

  useEffect(() => {
    tl.current?.reversed(!isOpen);
  }, [isOpen]);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.opened : styles.closed}`}
      ref={header}
    >
      <Container>
        <div className={`${styles.header_grid} header-grid-ref`}>
          <Branding handleIsOpen={handleIsOpen} isOpen={isOpen} />
          <NavLInks />
          <CTA />
        </div>
      </Container>
      <div className={`${styles.overlay} header-overlay`}></div>
    </header>
  );
}
