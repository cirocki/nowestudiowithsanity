import { LinkType } from "@/types/LinkType";
import Link from "next/link";

export function linkResolver(link: LinkType | undefined) {
  if (!link) return null;

  // If linkType is not set but href is, lets set linkType to "href".  This comes into play when pasting links into the portable text editor because a link type is not assumed.
  if (!link.linkType && link.href) {
    link.linkType = "href";
  }

  switch (link.linkType) {
    case "href":
      return link.href || null;
    case "post":
      if (link?.postLink?.slug && typeof link.postLink.slug === "string") {
        return `/blog/${link.postLink.slug}`;
      }
    default:
      return null;
  }
}

interface ResolvedLinkProps {
  link: LinkType | undefined;
  children: React.ReactNode;
  className?: string;
}

export default function ResolvedLink({
  link,
  children,
  className,
}: ResolvedLinkProps) {
  // resolveLink() is used to determine the type of link and return the appropriate URL.
  const resolvedLink = linkResolver(link);

  if (typeof resolvedLink === "string") {
    return (
      <Link
        href={resolvedLink}
        target={link?.openInNewTab ? "_blank" : undefined}
        rel={link?.openInNewTab ? "noopener noreferrer" : undefined}
        className={className}
      >
        {children}
      </Link>
    );
  }
  return <>{children}</>;
}
