import { getCollection } from 'astro:content';

export const getContent = async (type, { slugs = [], limit = 5, offset = 0, filter = {}, sort = 'latest' } = {}) => {
  const posts = await getCollection(type);

  // Filter posts based on slugs
  const filteredBySlugs = slugs.length
    ? posts.filter(post => slugs.includes(post.slug))
    : posts;

  // Apply additional filter (e.g., { author: 'Alistair' })
  const filteredByCriteria = Object.keys(filter).length
    ? filteredBySlugs.filter(post =>
        Object.entries(filter).every(([key, value]) => post.data[key] === value)
      )
    : filteredBySlugs;

  // Sort posts by date if sort is not "none"
  const sortedPosts = sort === 'none'
    ? filteredByCriteria // No sorting applied
    : filteredByCriteria.sort((a, b) => {
        const dateA = new Date(a.data.date).getTime();
        const dateB = new Date(b.data.date).getTime();
        return sort === 'latest' ? dateB - dateA : dateA - dateB;
      });

  // Limit the posts based on offset and limit
  const limited = sortedPosts.slice(offset, offset + limit);

  return limited; // Return the result
};
