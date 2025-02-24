import SectionHeader from "@/app/components/atoms/sectionHeader/SectionHeader";
import Container from "../../../../components/atoms/container/Container";
import styles from "./blogsection-styles.module.scss";
import SectionSubtitle from "@/app/components/atoms/sectionSubtitle/SectionSubtitle";
import MoreButton from "@/app/components/atoms/moreButton/moreButton";

import fetchFromSanity from "@/app/utils/fetchFromSanity";

import PostPreview from "@/app/components/molecules/PostPreview/PostPreview";
import { LATEST_POSTS } from "@/sanity/queries/latestPosts";

export default async function BlogSection() {
  const allPosts = await fetchFromSanity(LATEST_POSTS);
  return (
    <section className={styles.blog}>
      <Container>
        <SectionHeader title={"Blog"} number={4} />
        <div className={styles.blog_section_grid}>
          <div className={styles.section_subtitle_wrapper}>
            <SectionSubtitle>
              Dzielimy się wiedzą i&nbsp;doświadczeniem na temat szeroko
              pojętego marketingu internetowego.
            </SectionSubtitle>
          </div>

          <div className={styles.more}>
            <MoreButton href={"/blog"} name="Więcej na blogu" />
          </div>

          <div className={styles.articles_grid}>
            {allPosts?.length > 0 &&
              allPosts.map((post) => (
                <PostPreview key={post._id} post={post} />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
