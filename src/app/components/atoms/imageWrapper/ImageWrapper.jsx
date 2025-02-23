import styles from "./imagewrapper.module.scss";
export default function ImageWrapper({ children }) {
  return <div className={styles.image_wrapper}>{children}</div>;
}
