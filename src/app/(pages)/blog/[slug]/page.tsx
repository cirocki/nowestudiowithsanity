import { client } from "../../../../sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import { POSTDATA } from "../../../../sanity/queries/postData";
import SanityImage from "@/app/components/atoms/sanityImage/SanityImage";
import { richTextComponents } from "@/sanity/richTextComponents/richTextComponents";
import { notFound } from "next/navigation";
import ImageWrapper from "@/app/components/atoms/imageWrapper/ImageWrapper";
import Container from "@/app/components/atoms/container/Container";
import styles from "./blogpage-styles.module.scss";
import { Link } from "next-transition-router";
import ShareWidget from "@/app/components/molecules/ShareWidget/ShareWidget";

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
            <div className={styles.article_info_wrapper}>
              <p className={styles.date}>
                {new Date(publishedAt).toLocaleDateString()}
              </p>
              <div className={styles.tags_wrapper}>
                <ul>
                  {tags.map((tag: Tag) => (
                    <li className={styles.tag} key={tag._id}>
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>

        {image && (
          <div className={styles.article_header_image_wrapper}>
            <Container>
              <div className={styles.article_header_image_grid}>
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
              </div>
            </Container>
          </div>
        )}
      </header>

      <div className={styles.article_body_wrapper}>
        <Container>
          <div className={styles.article_body}>
            <div className={styles.article_content}>
              <p className={styles.intro}>{intro}</p>
              <p>{seoDesc}</p>
              {Array.isArray(richBody) && (
                <PortableText
                  value={richBody}
                  components={richTextComponents}
                />
              )}
            </div>
          </div>
          <div className={styles.share}>
            <p>Udostępnij:</p>
            <ShareWidget link="https://www.onet.pl/" desc={seoDesc} />
          </div>
        </Container>
      </div>

      <div className={styles.article_footer}>
        <Container>
          <div className={styles.article_footer_grid}>
            <div className={styles.article_footer_back}>
              <Link href="/blog" className={styles.article_footer_link}>
                Wróć do listy artykułów
              </Link>
            </div>
            <div className={styles.article_footer_featured}>
              <Link href="/blog">Sprawdz tez</Link>
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}
