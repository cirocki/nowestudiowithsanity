export interface LinkType {
  _key: string;
  openInNewTab?: boolean;
  postLink?: {
    slug?: string;
  };
  _type: string;
  linkType?: string;
  href: string;
}
