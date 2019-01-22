const routes = [
  {
    title: 'Home',
    href: '/',
    prefetch: false,
  },
  {
    title: 'Weddings',
    href: '/category?categoryID=weddings',
    as: '/weddings',
    prefetch: false,
  },
  {
    title: 'Lifestyle',
    href: '/category?categoryID=lifestyle',
    as: '/lifestyle',
    prefetch: false,
  },
  {
    title: 'Styled Shoots',
    href: '/category?categoryID=styled_shoots',
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
