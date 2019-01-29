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
    href: '/photo-queue',
    prefetch: false,
    isAdmin: false,
    isNav: true,
  },
  {
    title: 'Contact',
    href: '/contact',
    prefetch: true,
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
  {
    title: 'Admin',
    href: '/admin/login',
    prefetch: false,
    isAdmin: false,
    isNav: false,
  },
  {
    title: 'Add a Shoot',
    href: '/admin/add-shoot',
    prefetch: false,
    isAdmin: true,
    isNav: false,
  },
  {
    title: 'Update a Shoot',
    href: '/admin/update-shoot',
    prefetch: false,
    isAdmin: true,
    isNav: false,
  },
  {
    title: 'Manage Photo Queue',
    href: '/admin/photo-queue',
    prefetch: false,
    isAdmin: true,
    isNav: false,
  },
);

export default routes;
