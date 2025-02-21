import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import SanityImage from "../../atoms/SanityImage/SanityImage";

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
    <article>
      <Link href={`/blog/${slug.current}`}>
        <h2>{title}</h2>
      </Link>
      {image && (
        <SanityImage src={image} alt={title} width={360} height={240} />
      )}
      <p>Dodano: {new Date(publishedAt).toLocaleDateString()}</p>
      <p>{intro}</p>
      <div>
        {tags.map((tag: Tag) => (
          <p className="text-sm font-semibold" key={tag._id}>
            {tag.name}
          </p>
        ))}
      </div>
    </article>
  );
};
export default PostPreview;
