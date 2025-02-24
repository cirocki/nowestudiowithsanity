import PostPreview from "@/app/components/molecules/PostPreview/PostPreview";
import fetchFromSanity from "@/app/utils/fetchFromSanity";
import { ALL_POSTS } from "@/sanity/queries/allPosts";
import styles from "./blogindex-styles.module.scss";
import Container from "@/app/components/atoms/container/Container";
export default async function BlogPage() {
  const allPosts = await fetchFromSanity(ALL_POSTS);

  return (
    <div>
      <div className={styles.page_header}>
        <Container>
          <div className={styles.page_header_content}>
            <h1 className="title">Blog</h1>
            <h2>
              Over 10 years experience in design, close collaboration in work,
              friendship and a sense of humor is what makes FANCY a unique
              company.
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
