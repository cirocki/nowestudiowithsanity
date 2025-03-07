// import ResolvedLink from './resolvedLink'

import SanityImage from "@/app/components/atoms/sanityImage/SanityImage";
import SanityVideo from "@/app/components/atoms/sanityVideo/SanityVideo";
import ResolvedLink from "@/app/utils/resolvedLink";
import { LinkType } from "@/types/LinkType";

export const richTextComponents = {
  types: {
    youtube: (props: { value: { url: string } }) => (
      <SanityVideo url={props.value.url} />
    ),
    image: (props: { value: { src: string; alt: string } }) => (
      <SanityImage
        src={props.value}
        alt={props.value.alt}
        width={1200}
        height={800}
      />
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: LinkType;
    }) => {
      return (
        <>
          <ResolvedLink link={value}>{children}</ResolvedLink>
        </>
      );
    },
  },
};
