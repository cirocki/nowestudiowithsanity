import type { Metadata } from "next";

import "./styles/normalize.scss";
import "./styles/globals.scss";
// import Link from "next/link";
// import { Link } from "next-transition-router";
// import Container from "./components/atoms/container/Container";
import Footer from "./components/organisms/footer/Footer";
import { Providers } from "./animations/providers";
import Header from "./components/organisms/header/Header";
// import ContactSection from "./components/organisms/contactSection/ContactSection";
import SmoothScroll from "./components/molecules/SmoothScroll/SmoothScroll";

export const metadata: Metadata = {
  title: "NOWE.studio | Nowoczesne strony internetowe",
  description: "Nowoczesne strony internetowe...",
  appleWebApp: {
    title: "NOWE.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Providers>
          <SmoothScroll>
            <Header />
            <main>
              {children}

              {/* <ContactSection /> */}
            </main>
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
