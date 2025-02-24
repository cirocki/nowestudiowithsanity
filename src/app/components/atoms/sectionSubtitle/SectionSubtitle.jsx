import styles from "./sectionsubtitle-styles.module.scss";

export default function SectionSubtitle({ children }) {
  return <h3 className={styles.section_subtitle}>{children}</h3>;
}
