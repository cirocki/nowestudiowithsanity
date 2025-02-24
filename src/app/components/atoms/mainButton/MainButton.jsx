import styles from "./mainbtn-styles.module.scss";
import Link from "next/link";

export default function MainButton({ href, name }) {
  return (
    <Link href={href} className={`${styles.btn} ${styles.btn_main}`}>
      <span className={styles.btn_title}>{name}</span>
    </Link>
  );
}
