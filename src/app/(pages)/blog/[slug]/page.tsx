import { client } from "../../../../sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
import { POSTDATA } from "../../../../sanity/queries/postData";
import SanityImage from "@/app/components/atoms/SanityImage/SanityImage";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const options = { next: { revalidate: 30 } };
  const post = await client.fetch<SanityDocument>(
    POSTDATA,
    await params,
    options
  );

  const {
    title,
    // metaTitle,
    image,
    publishedAt,
    seodesc,
    intro,
    richBody,
    tags,
  } = post;

  interface Tag {
    _id: string;
    name: string;
  }

  return (
    <article>
      <Link href="/blog" className="hover:underline">
        ← Back to posts
      </Link>

      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      {image && (
        <SanityImage
          src={post.image}
          alt={post.title}
          width={720}
          height={480}
        />
      )}

      <div className="prose">
        <p>Published: {new Date(publishedAt).toLocaleDateString()}</p>
        <strong>seo:</strong>
        <p>{seodesc}</p>
        <br></br>
        <strong>intro:</strong>
        <p>{intro}</p>
        <br></br>
        tags:
        {tags.map((tag: Tag) => (
          <p className="text-sm font-semibold" key={tag._id}>
            {tag.name}
          </p>
        ))}
        <br></br>
        {Array.isArray(richBody) && <PortableText value={richBody} />}
      </div>
    </article>
  );
}
