import SectionHeader from "@/app/components/atoms/sectionHeader/SectionHeader";
import Container from "../../../../components/atoms/container/Container";
import styles from "./projectssection-styles.module.scss";

import SectionSubtitle from "@/app/components/atoms/sectionSubtitle/SectionSubtitle";
import ProjectsThumbs from "@/app/components/organisms/projectsThumbs/ProjectsThumbs";
export default function ProjectsSection() {
  return (
    <section className={styles.projects}>
      <Container>
        <SectionHeader title={"Projekty"} number={3} />
        <div className={styles.projects_top}>
          <SectionSubtitle>
            Innowacyjną technologie łączymy z&nbsp;ekscytującym designem.
            Z&nbsp;dumą prezentujemy kilka ostatnich realizacji.
          </SectionSubtitle>
        </div>
        <ProjectsThumbs />
      </Container>
    </section>
  );
}
