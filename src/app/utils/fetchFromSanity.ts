// FETCH POSTS WITH CHOSEN QUERY FROM SANITY
import { type SanityDocument } from "next-sanity";
import { client } from "../../sanity/client";
async function fetchFromSanity(query: string) {
  const options = { next: { revalidate: 30 } };
  const data = await client.fetch<SanityDocument[]>(query, {}, options);
  return data;
}
export default fetchFromSanity;
