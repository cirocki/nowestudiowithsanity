export const ALL_POSTS = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, intro, tags[]->{_id, slug, name}}`;
