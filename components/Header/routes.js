const routes = [
  {
    title: 'Home',
    href: '/',
    prefetch: false,
    admin: false,
  },
  {
    title: 'Weddings',
    href: '/category?id=weddings',
    as: '/category/weddings',
    prefetch: false,
    admin: false,
  },
  {
    title: 'Lifestyle',
    href: '/category?id=lifestyle',
    as: '/category/lifestyle',
    prefetch: false,
    admin: false,
  },
  {
    title: 'Styled Shoots',
    href: '/category?id=styled-shoots',
    as: '/category/styled-shoots',
    prefetch: false,
    admin: false,
  },
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
];

export default routes;
