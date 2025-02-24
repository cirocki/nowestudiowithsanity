import { client } from "../../../../sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
import { POSTDATA } from "../../../../sanity/queries/postData";
import SanityImage from "@/app/components/atoms/sanityImage/SanityImage";
import { richTextComponents } from "@/sanity/richTextComponents/richTextComponents";
import { notFound } from "next/navigation";
import ImageWrapper from "@/app/components/atoms/imageWrapper/ImageWrapper";
import Container from "@/app/components/atoms/container/Container";
import styles from "./blogpage-styles.module.scss";

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

  if (!post) {
    return notFound();
  }

  const {
    title,
    // metaTitle,
    image,
    publishedAt,
    seoDesc,
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
      <Container>
        <header className={styles.blog_header}>
          <h1>{title}</h1>
          {image && (
            <ImageWrapper>
              <SanityImage src={image} alt={title} width={720} height={480} />
            </ImageWrapper>
          )}
        </header>

        <div className={styles.blog_content}>
          <p>Published: {new Date(publishedAt).toLocaleDateString()}</p>
          <strong>seo:</strong>
          <p>{seoDesc}</p>
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
          {Array.isArray(richBody) && (
            <PortableText value={richBody} components={richTextComponents} />
          )}
        </div>
        <div className={styles.blog_footer}>
          <Link href="/blog" className="hover:underline">
            ← Back to posts
          </Link>
        </div>
      </Container>
    </article>
  );
}
