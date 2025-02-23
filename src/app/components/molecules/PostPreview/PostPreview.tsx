import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import SanityImage from "../../atoms/SanityImage/SanityImage";
import styles from "./postpreview-styles.module.scss";
import ImageWrapper from "@/app/components/atoms/imageWrapper/ImageWrapper";
import RightArrow from "@/app/components/atoms/svgs/rightArrow/RightArrow";

interface PostPreviewProps {
  post: SanityDocument;
}

const PostPreview = ({ post }: PostPreviewProps) => {
  const { title, slug, publishedAt, image, intro, tags } = post;

  interface Tag {
    _id: string;
    name: string;
  }
  return (
    <article className={styles.article_card}>
      <Link href={`/blog/${slug.current}`} className={styles.article_link}>
        <div className={styles.top}>
          <ImageWrapper>
            <SanityImage src={image} alt={title} width={1200} height={800} />
          </ImageWrapper>
        </div>
        <div className={styles.bot}>
          <div className={styles.tags_wrapper}>
            <ul>
              {tags.map((tag: Tag) => (
                <li className={styles.tag} key={tag._id}>
                  <span>{tag.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <h4 className={styles.article_title}>{title}</h4>
          <div className={styles.readmore_wrapper}>
            <span>Czytaj artykuł</span>
            <RightArrow />
          </div>
        </div>
      </Link>
    </article>
  );
};
export default PostPreview;
