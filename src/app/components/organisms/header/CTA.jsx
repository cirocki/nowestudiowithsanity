import { pageInfo } from "@/app/data/pageInfo";
import styles from "./header-styles.module.scss";
export default function CTA() {
  return (
    <div className={`${styles.cta} cta_ref`}>
      <a href={`tel: ${pageInfo.companyPhoneFull}`} className={styles.cta_link}>
        {pageInfo.companyPhone}
      </a>
    </div>
  );
}
