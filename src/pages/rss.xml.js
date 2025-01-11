import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('articles')

  return rss({
    // `<title>` field in output xml
    title: 'The New Yorkist',
    // `<description>` field in output xml
    description: '',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts.map((post) => {
      return {
        link: `/articles/${post?.slug}`,
        title: post?.data?.title,
        description: post?.data?.description,
        pubDate: post?.data?.date,
      };
    }),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}