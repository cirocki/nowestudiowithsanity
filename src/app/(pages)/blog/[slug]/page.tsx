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
    <article className={styles.blog_page}>
      <header className={styles.article_header}>
        <Container>
          <div className={styles.article_header_content}>
            <h1 className={styles.article_title}>{title}</h1>
            <div className={styles.tags_wrapper}>
              <ul>
                {tags.map((tag: Tag) => (
                  <li className={styles.tag} key={tag._id}>
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.date}>
              {new Date(publishedAt).toLocaleDateString()}
            </p>
          </div>

          {image && (
            <div className={styles.article_header_image}>
              <ImageWrapper>
                <SanityImage
                  src={image}
                  alt={title}
                  width={1200}
                  height={800}
                />
              </ImageWrapper>
            </div>
          )}
        </Container>
      </header>

      <div className={styles.article_content}>
        <Container>
          <strong>seo:</strong>
          <p>{seoDesc}</p>
          <br></br>
          <p className={styles.intro}>{intro}</p>
          <p>{intro}</p>
          <br></br>
          {Array.isArray(richBody) && (
            <PortableText value={richBody} components={richTextComponents} />
          )}
        </Container>
      </div>
      <div className={styles.blog_footer}>
        <Link href="/blog" className="hover:underline">
          ← Back to posts
        </Link>
      </div>
    </article>
  );
}
