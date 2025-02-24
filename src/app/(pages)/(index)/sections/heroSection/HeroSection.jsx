import Container from "../../../../components/atoms/container/Container";
import styles from "./herosection-styles.module.scss";

import PromoBox from "@/app/components/molecules/PromoBox/PromoBox";

export default function HeroSection() {
  return (
    <section className={`${styles.hero} top`}>
      <Container>
        <div className={styles.hero_content}>
          <div className={styles.hero_grid}>
            <div className={styles.title_wrapper}>
              <div className={styles.centered}>
                <h2 className={styles.hero_title}>Krok do sukcesu</h2>
              </div>
            </div>
            <div className={styles.video_wrapper}>
              <video
                muted
                width="100%"
                height="auto"
                preload="auto"
                playsInline
                autoPlay
                loop
              >
                <source src="/mov/hands.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.promo_wrapper}>
              <PromoBox />
            </div>
            <div className={styles.subtitle_wrapper}>
              <h3 className={styles.hero_subtitle}>
                Nowoczesna strona internetowa oraz przemyślana strategia
                marketingowa przeniosą Twój biznes na wyższy poziom. Dostarczamy
                produkty cyfrowe, które gwarantują rozwój Twojej firmie i kreują
                pozytywny wizerunek marki.
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
