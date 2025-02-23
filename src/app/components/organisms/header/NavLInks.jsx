import styles from "./navlinks-styles.module.scss";
import { navLinks } from "@/app/data/navLinks";
import { Link } from "next-transition-router";

export default function NavLInks() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <hr className="hr_ref"></hr>
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className={`${styles.nav_link} link_ref`}>
              <span className={styles.mask}>
                <div className={styles.link_wrapper}>
                  <span className={`${styles.link_title1} ${styles.title}`}>
                    {item.title}
                  </span>
                  <span className={`${styles.link_title2} ${styles.title}`}>
                    {item.title}
                  </span>
                </div>
              </span>
            </Link>
            <hr className="hr_ref"></hr>
          </li>
        ))}
      </ul>
    </nav>
  );
}
