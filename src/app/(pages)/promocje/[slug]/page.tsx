import { client } from "../../../../sanity/client";
import { PortableText, type SanityDocument } from "next-sanity";
import SanityImage from "@/app/components/atoms/sanityImage/SanityImage";
import { richTextComponents } from "@/sanity/richTextComponents/richTextComponents";
import { notFound } from "next/navigation";
import { PROMOPAGEDATA } from "@/sanity/queries/promoPageData";

export default async function PromotionsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const options = { next: { revalidate: 30 } };
  const page = await client.fetch<SanityDocument>(
    PROMOPAGEDATA,
    await params,
    options
  );

  if (!page) {
    return notFound();
  }

  const {
    title,
    // metaTitle,
    seoDesc,
    image,
    publishedAt,
    richBody,
  } = page;

  return (
    <article>
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      {image && (
        <SanityImage src={image} alt={title} width={720} height={480} />
      )}

      <div className="prose">
        <p>Published: {new Date(publishedAt).toLocaleDateString()}</p>
        <strong>seo:</strong>
        <p>{seoDesc}</p>
        <br></br>
        <br></br>
        {Array.isArray(richBody) && (
          <PortableText value={richBody} components={richTextComponents} />
        )}
      </div>
    </article>
  );
}
