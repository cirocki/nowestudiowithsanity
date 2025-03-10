import Container from "../container/Container";
import styles from "./pageheader-styles.module.scss";

interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className={styles.page_header}>
      <Container>
        <div className={styles.page_header_content}>
          <h1>{title}</h1>
          <p>{children}</p>
        </div>
      </Container>
    </header>
  );
}
