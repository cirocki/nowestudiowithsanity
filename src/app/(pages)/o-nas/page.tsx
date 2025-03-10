import PageHeader from "@/app/components/atoms/pageHeader/PageHeader";
import Container from "@/app/components/atoms/container/Container";
import styles from "./aboutpage-styles.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <PageHeader title={"O nas"}>
        Doradzamy, jak świadomie zbudować wizerunek w sieci i&nbsp;wykorzystać
        potencjał Internetu. Praktyczne wskazówki oraz najnowsze trendy.
      </PageHeader>
    </div>
  );
}
