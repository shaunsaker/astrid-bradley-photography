import { categories } from '../../config';

const routes = [
  {
    title: 'Home',
    href: '/',
    prefetch: false,
    admin: false,
  },
];

categories.forEach((category) => {
  const { name, id } = category;

  routes.push({
    title: name,
    href: `/category?id=${id}`,
    as: `/category/${id}`,
    prefetch: false,
    admin: false,
  });
});

routes.push(
  {
    title: 'Photo Queue',
    href: '/photo-queue',
    prefetch: false,
    admin: false,
  },
  {
    title: 'Contact',
    href: '/contact',
    prefetch: true,
    admin: false,
  },
  {
    title: 'Admin',
    href: '/admin',
    prefetch: false,
    admin: true,
  },
);

export default routes;
