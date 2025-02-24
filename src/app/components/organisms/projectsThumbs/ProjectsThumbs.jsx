"use client";
import React from "react";
import ImageWrapper from "../../atoms/imageWrapper/ImageWrapper";
import Image from "next/image";
import MoreButton from "../../atoms/moreButton/moreButton";
import styles from "./projectsthumbs-styles.module.scss";
import Container from "../../atoms/container/Container";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function ProjectsThumbs() {
  return (
    <div className={styles.projects_list}>
      <div className={styles.project}>
        <div className={styles.project_image_wrapper}>
          <ImageWrapper>
            <Image
              src="/img/index/projects/ex.jpg"
              width={1920}
              height={1080}
              alt={`Nowoczesne strony internetowe - programista Gdańsk`}
            />
          </ImageWrapper>
        </div>
        <div className={styles.project_content_wrapper}>
          <div className={styles.project_content}>
            <h4 className={styles.project_title}>PON-CHEX.COM</h4>
            <p className={styles.project_subtitle}>
              Nowoczesna strona internetowa dla firmy transportującej maszyny.
              Indywidualny projekt graficzny nawiązujący do branży. Nasz rekord
              -&nbsp;aż&nbsp;6&nbsp;wersji językowych!
            </p>
            <MoreButton
              href={"/oferta/strony-internetowe"}
              name="Sprawdź szczegóły"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.project} ${styles.reverse}`}>
        <div className={styles.project_image_wrapper}>
          <ImageWrapper>
            <Image
              src="/img/index/projects/ex2.jpg"
              width={1920}
              height={1080}
              alt={`Nowoczesne strony internetowe - programista Gdańsk`}
            />
          </ImageWrapper>
        </div>
        <div className={styles.project_content_wrapper}>
          <div className={styles.project_content}>
            <h4 className={styles.project_title}>PON-CHEX.COM</h4>
            <p className={styles.project_subtitle}>
              Nowoczesna strona internetowa dla firmy transportującej maszyny.
              Indywidualny projekt graficzny nawiązujący do branży. Nasz rekord
              -&nbsp;aż&nbsp;6&nbsp;wersji językowych!
            </p>
            <MoreButton
              href={"/oferta/strony-internetowe"}
              name="Sprawdź szczegóły"
            />
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.project_image_wrapper}>
          <ImageWrapper>
            <Image
              src="/img/index/projects/ex.jpg"
              width={1920}
              height={1080}
              alt={`Nowoczesne strony internetowe - programista Gdańsk`}
            />
          </ImageWrapper>
        </div>
        <div className={styles.project_content_wrapper}>
          <div className={styles.project_content}>
            <h4 className={styles.project_title}>PON-CHEX.COM</h4>
            <p className={styles.project_subtitle}>
              Nowoczesna strona internetowa dla firmy transportującej maszyny.
              Indywidualny projekt graficzny nawiązujący do branży. Nasz rekord
              -&nbsp;aż&nbsp;6&nbsp;wersji językowych!
            </p>
            <MoreButton
              href={"/oferta/strony-internetowe"}
              name="Sprawdź szczegóły"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
