"use client";
import { Link } from "next-transition-router";
import Container from "../../atoms/container/Container";
import SectionHeader from "../../atoms/sectionHeader/SectionHeader";
import styles from "./contactsection-styles.module.scss";
import { pageInfo } from "@/app/data/pageInfo";
import { socialLinks } from "@/app/data/socialLinks";
import PulsingDot from "../../atoms/pulsingDot/PulsingDot";
import SectionSubtitle from "../../atoms/sectionSubtitle/SectionSubtitle";
import { usePathname } from "next/navigation";

export default function ContactSection() {
  const { companyPhone, companyPhoneFull, companyEmail } = pageInfo;
  const currentRoute = usePathname();

  if (currentRoute === "/kontakt") {
    return null;
  } else {
    return (
      <section className={styles.contact}>
        <Container>
          <SectionHeader title={"Kontakt"} number={5} />
          <div className={styles.contact_grid}>
            <div className={styles.contact_left}>
              <div className={styles.section_subtitle_wrapper}>
                <SectionSubtitle>
                  Uwolnij prawdziwy potencjał Twojego biznesu w&nbsp;Internecie.
                  Zapraszamy do współpracy.
                </SectionSubtitle>
              </div>
              <div className={styles.available}>
                <PulsingDot />
                <span>Gotowi na nowe wyzwania</span>
              </div>
            </div>
            <div className={styles.contact_right}>
              <address className={styles.contact_links_wrapper}>
                <Link
                  href={"tel:" + companyPhoneFull}
                  className={styles.contact_link}
                >
                  {companyPhone}
                </Link>
                <Link
                  href={"mailto:" + companyEmail}
                  className={styles.contact_link}
                >
                  {companyEmail}
                </Link>
              </address>

              <div className={styles.contact_socials}>
                <ul>
                  {socialLinks.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className={styles.social_link}
                        target="_blank"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
