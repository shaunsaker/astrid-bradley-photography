const routes = [
  {
    title: 'Home',
    href: '/',
    prefetch: false,
  },
  {
    title: 'Weddings',
    href: '/category?id=weddings',
    as: '/category/weddings',
    prefetch: false,
  },
  {
    title: 'Lifestyle',
    href: '/category?id=lifestyle',
    as: '/category/lifestyle',
    prefetch: false,
  },
  {
    title: 'Styled Shoots',
    href: '/category?id=styled-shoots',
    as: '/category/styled-shoots',
    prefetch: false,
  },
  {
    title: 'Photo Queue',
    href: '/photo-queue',
    prefetch: false,
  },
  {
    title: 'Contact',
    href: '/contact',
    prefetch: true,
  },
];

export default routes;
