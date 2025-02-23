export const PROMOPAGEDATA = `
*[_type == "page" && slug.current == $slug][0] {
title,
metaTitle,
image,
publishedAt,
seoDesc,
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
}
`;
