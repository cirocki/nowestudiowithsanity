import styles from "./container-styles.module.scss";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
