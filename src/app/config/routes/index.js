import categories from '../categories';

const routes = [
  {
    title: 'Home',
    href: '/',
    prefetch: false,
    isAdmin: false,
    isNav: true,
  },
];

categories.forEach((category) => {
  const { name, id } = category;

  routes.push({
    title: name,
    href: `/category?id=${id}`,
    as: `/category/${id}`,
    prefetch: false,
    isAdmin: false,
    isNav: true,
  });
});

routes.push(
  {
    title: 'Photo Queue',
    description: 'View timeline & editing queue',
    href: '/photo-queue',
    prefetch: false,
    isAdmin: false,
    isNav: true,
  },
  {
    title: 'Contact',
    description:
      'Contact Wedding & Lifestyle photographer, Astrid Bradley, based in Cape Town, South Africa',
    href: '/contact',
    prefetch: false,
    isAdmin: false,
    isNav: true,
  },
  {
    title: 'Admin',
    href: '/admin',
    prefetch: false,
    isAdmin: true,
    isNav: true,
  },
);

export default routes;
