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
    <>
      <span className={styles.article_footer_box_intro}>Oferta</span>
      <Link href={`/oferta`} className={styles.article_footer_link}>
        Potrzebujesz nowoczesnej strony internetowej?<br></br>
        Jesteś w&nbsp;dobrym miejscu! Poznaj naszą ofertę.
      </Link>
    </>
  );

  const NextPrevPost = ({
    post,
    direction,
  }: {
    post: NextPrevPostType;
    direction: string;
  }) => (
    <>
      <span className={styles.article_footer_box_intro}>
        {direction} artykuł
      </span>
      <Link
        href={`/blog/${post.slug.current}`}
        className={styles.article_footer_link}
      >
        {post.title}
      </Link>
    </>
  );

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

              {Array.isArray(richBody) && (
                <PortableText
                  value={richBody}
                  components={richTextComponents}
                />
              )}
              <div className={styles.article_share_wrapper}>
                <span className={styles.article_footer_box_intro}>
                  Udostępnij w social mediach:
                </span>
                <ShareWidget link="https://www.onet.pl/" desc={seoDesc} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.article_footer}>
        <Container>
          <div className={styles.article_footer_grid}>
            <div>
              <BackButton href={"/blog"} name="Wróć do listy artykułów" />
            </div>
            {/* PREV  */}
            <div className={styles.article_footer_box}>
              {prevPost ? (
                <NextPrevPost post={prevPost} direction="Poprzedni" />
              ) : (
                <PostSubstitute />
              )}
            </div>

            {/* NEXT  */}
            <div className={styles.article_footer_box}>
              {nextPost ? (
                <NextPrevPost post={nextPost} direction="Następny" />
              ) : (
                <PostSubstitute />
              )}
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}
