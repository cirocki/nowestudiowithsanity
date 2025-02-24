import SectionHeader from "@/app/components/atoms/sectionHeader/SectionHeader";
import Container from "../../../../components/atoms/container/Container";
import styles from "./aboutsection-styles.module.scss";
import SectionSubtitle from "@/app/components/atoms/sectionSubtitle/SectionSubtitle";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Marquee from "@/app/components/atoms/marquee/Marquee";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <Container>
        <SectionHeader title={"O nas"} number={2} />
        <div className={styles.section_subtitle_wrapper}>
          <SectionSubtitle>
            Internet nieustannie ewoluuje, a&nbsp;my zmieniamy się wraz
            z&nbsp;nim.
            <br></br>
            Jedyną stałą jest bezkomprowisowe podejście do jakości.
          </SectionSubtitle>
        </div>
        <div className={styles.boxes_wrapper}>
          <div className={styles.boxes_grid}>
            <div className={`${styles.box} ${styles.box1}`}>
              <div className={styles.box_content}>
                <span className={styles.bold}>
                  <MapPin />
                </span>
                <p>Jesteśmy z&nbsp;Trójmiasta, ale działamy zdalnie.</p>
              </div>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <div className={styles.box_content}>
                <div className={styles.marquee_wrapper}>
                  <Marquee />
                </div>
                <Image
                  src="/img/index/about/projektowanie-nowoczesnych-stron-www-gdansk.jpg"
                  height={800}
                  width={800}
                  alt={`Nowoczesne strony internetowe - programista Gdańsk`}
                />
              </div>
            </div>
            <div className={`${styles.box} ${styles.box3}`}>
              <div className={styles.box_content}>
                <span className={styles.bold}>60%</span>
                <p>Naszych Klientów trafia do nas z&nbsp;polecenia.</p>
              </div>
            </div>
            <div className={`${styles.box} ${styles.box4}`}>
              <div className={styles.box_content}>
                <Image
                  src="/img/index/about/strony-internetowe-firma-trojmiasto.jpg"
                  height={800}
                  width={800}
                  alt={`Strony internetowe - firma z Trójmiasta`}
                />
              </div>
            </div>
            <div className={`${styles.box} ${styles.box5}`}>
              <div className={styles.box_content}>
                <span className={styles.bold}>50+</span>
                <p>
                  Zrealizowanych projektów dla klientów z&nbsp;całej Polski.
                </p>
              </div>
            </div>
            <div className={`${styles.box} ${styles.box6}`}>
              <div className={styles.box_content}>
                <p>
                  Skupiamy się na realizowaniu konkretnych celów biznesowych.
                  Wierzymy, że dobrze przemyślana strategia nie tylko zwiększa
                  zyski, ale buduje też silną i&nbsp;rozpoznawalną markę.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
