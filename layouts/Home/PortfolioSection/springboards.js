import { categories } from '../../../config';

// Take the first two categories
// Map them to springboard objects
const springboards = categories.slice(0, 2).map((category) => {
  const { name, id } = category;

  return {
    image: {
      src: `/static/images/springboard-${id}.jpg`,
      alt: name,
    },
    text: name,
    action: {
      nextLink: {
        href: `/category?id=${id}`,
        as: `/category/${id}`,
      },
    },
  };
});

export default springboards;
