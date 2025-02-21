// FETCH POSTS WITH CHOSEN QUERY FROM SANITY
import { type SanityDocument } from "next-sanity";
import { client } from "../../../src/sanity/client";
async function fetchPosts(query: string) {
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(query, {}, options);
  return posts;
}
export default fetchPosts;
