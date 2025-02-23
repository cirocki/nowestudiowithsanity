import { Link } from "next-transition-router";
import styles from "./footer-styles.module.scss";
export default function FooterLinks() {
  return (
    <div className={styles.links_wrapper}>
      <Link href={"/regulamin"} className={styles.link}>
        Regulamin
      </Link>
      <Link href={"/polityka-prywatnosci"} className={styles.link}>
        Polityka prywatności
      </Link>
    </div>
  );
}
