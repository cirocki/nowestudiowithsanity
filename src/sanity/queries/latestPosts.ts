export const LATEST_POSTS = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...3]{_id, title, slug, publishedAt, image, intro, tags[]->{_id, slug, name}}`;
