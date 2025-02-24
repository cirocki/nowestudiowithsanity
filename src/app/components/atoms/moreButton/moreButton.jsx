import styles from "./morebtn-styles.module.scss";
import Link from "next/link";
import RightArrow from "../svgs/rightArrow/RightArrow";
export default function MoreButton({ href, name }) {
  return (
    <Link href={href} className={`${styles.link}`}>
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
      <div className={styles.link_icon}>
        <RightArrow className={styles.icon} />
        <RightArrow className={styles.icon} />
      </div>
    </Link>
  );
}
