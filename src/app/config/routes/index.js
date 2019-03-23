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
  {
    title: 'Admin',
    href: '/admin/login',
    prefetch: false,
    isAdmin: false,
    isNav: false,
  },
  {
    title: 'Add a Shoot',
    href: '/admin/shoots/add',
    prefetch: false,
    isAdmin: true,
    isNav: false,
  },
  {
    title: 'Update a Shoot',
    href: '/admin/shoots/update',
    prefetch: false,
    isAdmin: true,
    isNav: false,
  },
  {
    title: 'Manage Photo Queue',
    href: '/admin/shoots/photo-queue',
    prefetch: false,
    isAdmin: true,
    isNav: false,
  },
);

export default routes;
