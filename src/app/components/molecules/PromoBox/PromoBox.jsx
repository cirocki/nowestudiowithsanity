import ImageWrapper from "../../atoms/imageWrapper/ImageWrapper";
import MoreButton from "../../atoms/moreButton/moreButton";
import styles from "./promobox-styles.module.scss";
import Image from "next/image";

export default function PromoBox() {
  return (
    <a className={styles.box} href="/promocja">
      <div className={styles.box_grid}>
        <div className={styles.promo_image}>
          <ImageWrapper>
            <Image
              src="/img/temp/wiosenna_promocja.jpg"
              height={110}
              width={110}
              alt="Przejdź na górę strony"
              className={styles.thumb}
            />
          </ImageWrapper>
        </div>
        <h3 className={styles.promo_title}>Wiosenna oferta specjalna!</h3>
        <div className={styles.promo_content}>
          <p>
            Profesjonalna strona internetowa dla Twojej firmy w&nbsp;promocyjnej
            cenie - już od 2900zł netto.*
          </p>
        </div>
        <div className={styles.ribbon}>
          <div className={styles.ribbon_content}>
            <span>* Tylko do końca marca 2025</span>
          </div>
        </div>
      </div>
    </a>
  );
}
