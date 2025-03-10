import PageHeader from "@/app/components/atoms/pageHeader/PageHeader";
import styles from "./contactpage-styles.module.scss";
import Container from "@/app/components/atoms/container/Container";

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <PageHeader title={"Kontakt"}>
        Doradzamy, jak świadomie zbudować wizerunek w sieci i&nbsp;wykorzystać
        potencjał Internetu. Praktyczne wskazówki oraz najnowsze trendy.
      </PageHeader>
      <Container>
        <p>telefon</p>
        <p>email</p>
        <p>sociale</p>

        <br></br>
        <p>zaproszenie do dzialania</p>
        <p>gotowi do pracy teraz</p>

        <br />
        <p>lokalizacja, zdalnie, info o miescie</p>
        <p>opening hours</p>
        <br />
        <p>some faq</p>
      </Container>
    </div>
  );
}
