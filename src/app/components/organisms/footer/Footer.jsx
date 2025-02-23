import Container from "../../atoms/container/Container";
import Copyrights from "./Copyrights";
import styles from "./footer-styles.module.scss";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <Container>
        <div className={styles.footer_grid}>
          <Copyrights />
          <FooterLinks />
        </div>
      </Container>
    </footer>
  );
}
