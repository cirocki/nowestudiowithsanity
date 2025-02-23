import { pageInfo } from "../../../data/pageInfo";
import styles from "./footer-styles.module.scss";

export default function Copyrights() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.copyrights}>
      <p>
        {`© ${currentYear} ${pageInfo.companyName}`} - wszelkie
        prawa&nbsp;zastrzeżone.
      </p>
    </div>
  );
}
