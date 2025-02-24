import Link from "next/link";
import Container from "../../../../components/atoms/container/Container";
import styles from "./offersection-styles.module.scss";
import Image from "next/image";
import SectionHeader from "@/app/components/atoms/sectionHeader/SectionHeader";

import MoreButton from "@/app/components/atoms/moreButton/moreButton";

import { offerData } from "./offerData";
import SectionSubtitle from "@/app/components/atoms/sectionSubtitle/SectionSubtitle";
import { Check } from "lucide-react";

export default function OfferSection() {
  return (
    <section className={styles.offer}>
      <Container>
        <SectionHeader title={"Oferta"} number={1} />

        <div className={styles.section_subtitle_wrapper}>
          <SectionSubtitle>
            Zajmujemy się internetową promocją firm i&nbsp;produktów. Pomagamy
            zaistnieć w&nbsp;sieci i&nbsp;osiągnąć cele biznesowe.
          </SectionSubtitle>
        </div>

        <div className={styles.offer_items_wrapper}>
          {/* // ITEM  */}
          <div className={styles.offer_item}>
            <div className={styles.offer_item_content_grid}>
              <div className={styles.offer_item_text}>
                <div className={styles.offer_item_heading}>
                  <span className={styles.number}>_01A</span>
                  <h4 className={styles.offer_item_title}>
                    Strony internetowe
                  </h4>
                </div>
                <p className={styles.offer_item_desc}>
                  Strona WWW to fundament działań marketingowych
                  w&nbsp;Internecie. Wykonujemy strony, które są nowoczesne,
                  funkcjonalne i&nbsp;przyjazne dla użytkownika. Wychodzimy poza
                  schematy, tworząc unikalny, zapadający w&nbsp;pamięć design.
                  Każdy projekt jest dopasowany do potrzeb klienta, uwzględnia
                  specyfikę branży oraz grupę docelową. Dobieramy odpowiednią
                  technologie, optymalizując koszty i&nbsp;czas realizacji.
                </p>
              </div>
              <div className={styles.offer_item_cta}>
                <MoreButton
                  href={"/oferta/strony-internetowe"}
                  name="Sprawdź szczegóły"
                />
              </div>

              <div className={styles.offer_item_benefits}>
                <div className={styles.benefits_box}>
                  <ul>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Zwiększysz sprzedaż, promując swoją działalność
                        globalnie, 24h na dobę, przez 365&nbsp;dni w&nbsp;roku.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Twoja obecność w&nbsp;Internecie poprawi wiarygodność
                        firmy i&nbsp;ułatwi kontakt z&nbsp;potencjalnymi
                        klientami.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Zyskasz elastyczny sposób na prezentację Twojej oferty,
                        z&nbsp;możliwością natychmiastowej aktualizacji.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* // ITEM END */}

          {/* // ITEM  */}
          <div className={styles.offer_item}>
            <div className={styles.offer_item_content_grid}>
              <div className={styles.offer_item_text}>
                <div className={styles.offer_item_heading}>
                  <span className={styles.number}>_01B</span>
                  <h4 className={styles.offer_item_title}>Pozycjonowanie</h4>
                </div>
                <p className={styles.offer_item_desc}>
                  Pozycjonowanie strony internetowej to czasochłonny proces,
                  wymagający wiedzy i&nbsp;doświadczenia. Efektem pracy
                  pozycjonera jest gwarancja, że internauci, korzystając
                  z&nbsp;wyszukiwarki Google, trafią właśnie na Twoją ofertę.
                  Nasza strategia na sukces w&nbsp;pozycjonowaniu to
                  systematyczne dodawanie wartościowych i&nbsp;unikalnych
                  treści. Zapewnia to trwałe, przewidywalne efekty, nawet po
                  zakończeniu współpracy.
                </p>
              </div>
              <div className={styles.offer_item_cta}>
                <MoreButton
                  href={"/oferta/pozycjonowanie"}
                  name="Sprawdź szczegóły"
                />
              </div>

              <div className={styles.offer_item_benefits}>
                <div className={styles.benefits_box}>
                  <ul>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Trafisz do klientów realnie zainteresowanych Twoją
                        ofertą. Wystarczy odpowiedzieć na potrzeby rynku.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Dobrze przygotowana strategia SEO jest tańsza
                        i&nbsp;bardziej skuteczna, niż tradycyjna reklama.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Wysoka pozycja w&nbsp;rankingach Google sprawi, że
                        zyskasz przewagę nad konkurencją z&nbsp;branży.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* // ITEM END */}

          {/* // ITEM  */}
          <div className={styles.offer_item}>
            <div className={styles.offer_item_content_grid}>
              <div className={styles.offer_item_text}>
                <div className={styles.offer_item_heading}>
                  <span className={styles.number}>_01C</span>
                  <h4 className={styles.offer_item_title}>
                    Social Media Marketing
                  </h4>
                </div>
                <p className={styles.offer_item_desc}>
                  Aktywny dialog i&nbsp;interakcja z&nbsp;klientami
                  w&nbsp;mediach społecznościowych, to jedna z&nbsp;najlepszych
                  i&nbsp;najtańszych form promocji w&nbsp;sieci. To również
                  doskonały sposób na zdobycie zaufania, które jest warunkiem
                  sukcesu w&nbsp;nowoczesnym biznesie. Potrafimy efektywnie
                  wykorzystać potencjał i&nbsp;nieograniczony zasięg serwisów
                  społecznościowych takich jak Facebook, czy Instagram.
                </p>
              </div>
              <div className={styles.offer_item_cta}>
                <MoreButton
                  href={"/oferta/social-media-marketing"}
                  name="Sprawdź szczegóły"
                />
              </div>

              <div className={styles.offer_item_benefits}>
                <div className={styles.benefits_box}>
                  <ul>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Potwierdzisz swój profesjonalizm, zyskasz zaufanie
                        i&nbsp;dodatkowy sposób na zwiększenie sprzedaży.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Obecność w&nbsp;mediach społecznościowych pozwoli Ci
                        dotrzeć do bardzo sprecyzowanej grupy odbiorców.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Wykorzystasz możliwości, jakie daje bezpośrednia
                        interakcja z&nbsp;klientem w&nbsp;czasie rzeczywistym.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* // ITEM END */}

          {/* // ITEM  */}
          <div className={styles.offer_item}>
            <div className={styles.offer_item_content_grid}>
              <div className={styles.offer_item_text}>
                <div className={styles.offer_item_heading}>
                  <span className={styles.number}>_01D</span>
                  <h4 className={styles.offer_item_title}>Copywriting</h4>
                </div>
                <p className={styles.offer_item_desc}>
                  Nawet najlepszą ofertę trzeba odpowiednio przedstawić
                  i&nbsp;opisać, by przyciągnąć odbiorców. Dopiero umiejętnie
                  dobrane słowa, wzbudzą zainteresowanie potencjalnych klientów.
                  Dlatego w&nbsp;naszych tekstach przekazujemy maksimum
                  informacji w&nbsp;logiczny, atrakcyjny i&nbsp;angażujący uwagę
                  sposób. Tworzymy treści przystępne w&nbsp;odbiorze,
                  profesjonalnie zredagowane, które realnie zwiększają sprzedaż.
                </p>
              </div>
              <div className={styles.offer_item_cta}>
                <MoreButton
                  href={"/oferta/copywriting"}
                  name="Sprawdź szczegóły"
                />
              </div>

              <div className={styles.offer_item_benefits}>
                <div className={styles.benefits_box}>
                  <ul>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Przedstawisz swoją ofertę w&nbsp;sposób, który wzbudza
                        zainteresowanie i&nbsp;angażuje emocjonalnie.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Umiejętnie dobrane słowa kluczowe zapewnią Twojej
                        stronie wysokie pozycje w&nbsp;wynikach wyszukiwania.
                      </p>
                    </li>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Wprowadzisz przemyślaną strukturę tekstu, która
                        prezentuje korzyści, zachęcając do działania.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* // ITEM END */}

          {/* // ITEM  */}
          <div className={styles.offer_item}>
            <div className={styles.offer_item_content_grid}>
              <div className={styles.offer_item_text}>
                <div className={styles.offer_item_heading}>
                  <span className={styles.number}>_01E</span>
                  <h4 className={styles.offer_item_title}>Branding</h4>
                </div>
                <p className={styles.offer_item_desc}>
                  Przemyślany i&nbsp;spójny przekaz marketingowy tworzy unikalną
                  tożsamość marki, wyróżnia ją z&nbsp;tłumu i&nbsp;na długo
                  zapada w&nbsp;pamięć. W&nbsp;ten sposób świadomie wpływamy na
                  to, jak nas postrzegają konsumenci. Kreując brand,
                  projektujemy spójny przekaz, wywołujemy określone emocje.
                  Stawiamy na kreatywność i&nbsp;nieszablonowe podejście, co
                  pozwala osiągnąć sukces w&nbsp;nawet najbardziej
                  konkurencyjnych branżach.
                </p>
              </div>
              <div className={styles.offer_item_cta}>
                <MoreButton
                  href={"/oferta/branding"}
                  name="Sprawdź szczegóły"
                />
              </div>

              <div className={styles.offer_item_benefits}>
                <div className={styles.benefits_box}>
                  <ul>
                    <li>
                      <Check className={styles.check} />
                      <p>
                        Stworzysz spójną i&nbsp;unikalną identyfikację wizualną
                        marki, rozpoznawaną przez konsumentów.
                      </p>
                    </li>

                    <li>
                      <Check className={styles.check} />
                      <p>
                        Zbudujesz reputację wiarygodnej firmy, zyskując
                        świadomych oraz lojalnych klientów.
                      </p>
                    </li>

                    <li>
                      <Check className={styles.check} />
                      <p>
                        Wyróżnisz się na tle konkurencji, co gwarantuje rozwój
                        Twojego biznesu i&nbsp;silniejszą pozycję na rynku.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* // ITEM END */}
        </div>
      </Container>
      {/* <Marquee /> */}
    </section>
  );
}
