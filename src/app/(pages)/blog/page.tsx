import PostPreview from "@/app/components/molecules/PostPreview/PostPreview";
import fetchFromSanity from "@/app/utils/fetchFromSanity";
import { ALL_POSTS } from "@/sanity/queries/allPosts";

export default async function BlogPage() {
  const allPosts = await fetchFromSanity(ALL_POSTS);

  return (
    <div>
      <h1>Blog Index</h1>
      <h2>Artykuły</h2>
      <hr />
      <div>
        {allPosts?.length > 0 &&
          allPosts.map((post) => <PostPreview key={post._id} post={post} />)}
      </div>
    </div>
  );
}
