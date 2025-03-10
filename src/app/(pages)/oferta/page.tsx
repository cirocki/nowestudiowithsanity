import PageHeader from "@/app/components/atoms/pageHeader/PageHeader";
import Container from "@/app/components/atoms/container/Container";
import styles from "./offerpage-styles.module.scss";

export default function ProjectsPage() {
  return (
    <div className={styles.offer}>
      <PageHeader title={"Oferta"}>
        Doradzamy, jak świadomie zbudować wizerunek w sieci i&nbsp;wykorzystać
        potencjał Internetu. Praktyczne wskazówki oraz najnowsze trendy.
      </PageHeader>
    </div>
  );
}
