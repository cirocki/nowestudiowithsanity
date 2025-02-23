import styles from "./hamburger-styles.module.scss";
import React, { useRef, useState } from "react";

export default function Hamburger({ handleIsOpen, isOpen }) {
  const hamburgerBtn = useRef();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const clickHamburger = () => {
    handleIsOpen();
    setIsBtnDisabled(true);

    setTimeout(function () {
      setIsBtnDisabled(false);
    }, 1200);
  };
  return (
    <button
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={clickHamburger}
      disabled={isBtnDisabled}
      ref={hamburgerBtn}
      className={`${styles.hamburger} ${styles.hamburger_spin}  ${
        isOpen ? `${styles.is_active}` : ""
      }`}
    >
      <div className={styles.hamburger_box}>
        <div className={styles.hamburger_inner}></div>
      </div>
    </button>
  );
}
