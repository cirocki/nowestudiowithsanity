import PostPreview from "@/app/components/molecules/PostPreview/PostPreview";
import fetchPosts from "@/app/utils/fetchPosts";
import { ALL_POSTS } from "@/sanity/queries/allPosts";

export default async function BlogPage() {
  const allPosts = await fetchPosts(ALL_POSTS);

  return (
    <div>
      <h1>Blog Index</h1>
      <pre>{JSON.stringify(allPosts, null, 2)}</pre>
      <h2>Artykuły</h2>
      <hr />
      <div>
        {allPosts?.length > 0 &&
          allPosts.map((post) => <PostPreview key={post._id} post={post} />)}
      </div>
    </div>
  );
}
