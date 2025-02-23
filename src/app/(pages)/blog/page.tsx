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
          <h1 className="title">Blog</h1>
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
