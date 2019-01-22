const routes = [
  {
    title: 'Home',
    href: '/',
    prefetch: false,
  },
  {
    title: 'Weddings',
    href: '/category?id=weddings',
    as: '/weddings',
    prefetch: false,
  },
  {
    title: 'Lifestyle',
    href: '/category?id=lifestyle',
    as: '/lifestyle',
    prefetch: false,
  },
  {
    title: 'Styled Shoots',
    href: '/category?id=styled_shoots',
    as: '/styled-shoots',
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
