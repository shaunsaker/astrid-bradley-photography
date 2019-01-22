const routes = [
  {
    title: 'Home',
    href: '/',
    prefetch: false,
  },
  {
    title: 'Weddings',
    href: '/category?id=weddings',
    prefetch: false,
  },
  {
    title: 'Lifestyle',
    href: '/category?id=lifestyle',
    prefetch: false,
  },
  {
    title: 'Styled Shoots',
    href: '/category?id=styled_shoots',
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
