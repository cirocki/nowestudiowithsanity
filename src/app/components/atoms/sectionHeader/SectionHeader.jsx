import styles from "./sectionheader-styles.module.scss";

export default function SectionHeader({ title, number }) {
  return (
    <div className={styles.section_header}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.number}>{`_0${number}`}</span>
    </div>
  );
}
