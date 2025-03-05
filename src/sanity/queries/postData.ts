export const POSTDATA = `
*[_type == "post" && slug.current == $slug][0] {

title,
metaTitle,
image,
publishedAt,
seoDesc,
intro,
richBody[]{
 ...,
    markDefs[]{
      ...,
      _type == "link" => { 
           "postLink": @.post->{
            "slug": slug.current
        }
      }
    }
},
tags[]->{_id, slug, name},
    "nextPost": *[_type == "post" && publishedAt > ^.publishedAt] | order(publishedAt asc) [0] {
        title,
        slug
    },
    "prevPost": *[_type == "post" && publishedAt < ^.publishedAt] | order(publishedAt desc) [0] {
        title,
        slug
    }
}
`;
