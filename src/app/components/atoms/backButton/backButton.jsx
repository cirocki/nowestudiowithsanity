import styles from "./backbtn-styles.module.scss";
import { Link } from "next-transition-router";
import LeftArrow from "../svgs/leftArrow/LeftArrow";
export default function BackButton({ href, name }) {
  return (
    <Link href={href} className={`${styles.link}`}>
      <div className={styles.link_icon}>
        <LeftArrow className={styles.icon} />
        <LeftArrow className={styles.icon} />
      </div>
      <span className={styles.mask}>
        <div className={styles.link_wrapper}>
          <span className={`${styles.link_title1} ${styles.title}`}>
            {name}
          </span>
          <span className={`${styles.link_title2} ${styles.title}`}>
            {name}
          </span>
        </div>
      </span>
    </Link>
  );
}
