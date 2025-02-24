// import ResolvedLink from './resolvedLink'

import SanityImage from "@/app/components/atoms/sanityImage/SanityImage";
import ResolvedLink from "@/app/utils/resolvedLink";
import { LinkType } from "@/types/LinkType";

export const richTextComponents = {
  types: {
    image: (props: { value: { src: string; alt: string } }) => (
      <SanityImage
        src={props.value}
        alt={props.value.alt}
        width={720}
        height={480}
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
