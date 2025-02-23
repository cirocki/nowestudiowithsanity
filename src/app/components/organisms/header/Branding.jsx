`use client`;

import { pageInfo } from "@/app/data/pageInfo";
import styles from "./header-styles.module.scss";
import Hamburger from "./Hamburger";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import { Link } from "next-transition-router";
import { usePathname } from "next/navigation";

export default function Branding({ handleIsOpen, isOpen }) {
  const currentRoute = usePathname();
  const lenis = useLenis(({ scroll }) => {});
  const scrollTopFunc = () => {
    lenis.scrollTo("top", { lerp: 0.1, lock: true });
  };

  const LogoImg = () => (
    <Image
      src="/img/svg/logo.svg"
      height={95}
      width={866}
      alt={`${pageInfo.companyName} - logo`}
    />
  );

  return (
    <div className={styles.branding}>
      <div className={styles.branding_wrapper}>
        {currentRoute === "/" ? (
          <div className={styles.branding_logo} onClick={scrollTopFunc}>
            <LogoImg />
          </div>
        ) : (
          <Link href={"/"} className={styles.branding_logo}>
            <LogoImg />
          </Link>
        )}
        <Hamburger handleIsOpen={handleIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
}
