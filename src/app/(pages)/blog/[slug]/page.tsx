import { client } from "../../../../sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import { POSTDATA } from "../../../../sanity/queries/postData";
import SanityImage from "@/app/components/atoms/sanityImage/SanityImage";
import { richTextComponents } from "@/sanity/richTextComponents/richTextComponents";
import { notFound } from "next/navigation";
import { Link } from "next-transition-router";
import ImageWrapper from "@/app/components/atoms/imageWrapper/ImageWrapper";
import Container from "@/app/components/atoms/container/Container";
import styles from "./blogpage-styles.module.scss";
import ShareWidget from "@/app/components/molecules/ShareWidget/ShareWidget";
import BackButton from "@/app/components/atoms/backButton/backButton";
import type { Metadata } from "next";

// SEO DYNAMIC META FETCH
type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const page = await client.fetch(POSTDATA, params);
  return {
    title: `${page?.metaTitle} | NOWE.studio`,
    description: page?.seoDesc,
  } satisfies Metadata;
}
// SEO DYNAMIC META FETCH

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

  // NEED SLUG FOR SHARE LINK
  const { slug } = await params;

  if (!post) {
    return notFound();
  }
  const {
    title,
    image,
    publishedAt,
    seoDesc,
    intro,
    richBody,
    tags,
    nextPost,
    prevPost,
  } = post;

  interface Tag {
    _id: string;
    name: string;
  }

  interface NextPrevPostType {
    title: string;
    slug: {
      current: string;
    };
  }

  const PostSubstitute = () => (
    <Link href={`/oferta`} className={styles.another_article}>
      <span className={styles.another_article_intro}>Oferta</span>
      <h2 className={styles.another_article_title}>
        Potrzebujesz nowoczesnej strony internetowej?<br></br>
        Jesteś w&nbsp;dobrym miejscu! Poznaj naszą ofertę.
      </h2>
    </Link>
  );

  const NextPrevPost = ({
    post,
    direction,
  }: {
    post: NextPrevPostType;
    direction: string;
  }) => (
    <Link
      href={`/blog/${post.slug.current}`}
      className={styles.another_article}
    >
      <span className={styles.another_article_intro}>{direction} artykuł</span>
      <h2 className={styles.another_article_title}>{post.title}</h2>
    </Link>
  );

  return (
    <>
      <article className={styles.article}>
        <header className={styles.article_header}>
          <Container>
            <div className={styles.article_header_content}>
              <h1 className={styles.article_title}>{title}</h1>
              <div className={styles.article_info_wrapper}>
                <span className={styles.date}>
                  {new Date(publishedAt).toLocaleDateString()}
                </span>
                <div className={styles.tags_wrapper}>
                  <ul>
                    {tags.map((tag: Tag) => (
                      <li className={styles.tag} key={tag._id}>
                        <span>{tag.name}</span>
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

        <div className={styles.article_background}>
          <Container>
            <div className={styles.article_content_wrapper}>
              <div className={styles.article_content}>
                <p className={styles.intro}>{intro}</p>
                {Array.isArray(richBody) && (
                  <PortableText
                    value={richBody}
                    components={richTextComponents}
                  />
                )}
                <div className={styles.article_share}>
                  <span className={styles.another_article_intro}>
                    Udostępnij w social mediach:
                  </span>

                  {/* TODO - SPRAWDZIC CZY SHARING DZIALA I DODAĆ FOTO  */}
                  <ShareWidget
                    link={`https://nowe.studio/blog/${slug}`}
                    desc={seoDesc}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </article>

      <div className={styles.more_articles}>
        <Container>
          <div className={styles.more_articles_grid}>
            <div className={styles.back}>
              <BackButton href={"/blog"} name="Wróć do listy artykułów" />
            </div>

            {prevPost ? (
              <NextPrevPost post={prevPost} direction="Poprzedni" />
            ) : (
              <PostSubstitute />
            )}

            {nextPost ? (
              <NextPrevPost post={nextPost} direction="Następny" />
            ) : (
              <PostSubstitute />
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
