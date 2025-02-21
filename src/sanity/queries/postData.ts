export const POSTDATA = `
*[_type == "post" && slug.current == $slug][0] {
title,
metaTitle,
image,
publishedAt,
seodesc,
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
tags[]->{_id, slug, name}
}
`;
