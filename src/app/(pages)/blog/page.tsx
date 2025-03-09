import PostPreview from "@/app/components/molecules/PostPreview/PostPreview";
import fetchFromSanity from "@/app/utils/fetchFromSanity";
import { ALL_POSTS } from "@/sanity/queries/allPosts";
import styles from "./blogindex-styles.module.scss";
import Container from "@/app/components/atoms/container/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | NOWE.studio | Nowoczesne strony internetowe",
  description: "TODO Nowoczesne strony internetowe...",
};

export default async function BlogPage() {
  const allPosts = await fetchFromSanity(ALL_POSTS);

  return (
    <div>
      <div className={styles.page_header}>
        <Container>
          <div className={styles.page_header_content}>
            <h1 className="title">Blog</h1>
            <h2>
              Doradzamy, jak świadomie zbudować wizerunek w&nbsp;sieci
              i&nbsp;wykorzystać potencjał Internetu. Praktyczne wskazówki oraz
              najnowsze trendy.
            </h2>
          </div>
        </Container>
      </div>
      <section className={styles.articles_section}>
        <Container>
          <div className={styles.articles_grid}>
            {allPosts?.length > 0 &&
              allPosts.map((post) => (
                <PostPreview key={post._id} post={post} />
              ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
