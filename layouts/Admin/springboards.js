const springboards = [
  {
    image: { src: '/static/images/springboard-lifestyle.jpg', alt: 'Shoots' },
    text: 'Manage Shoots',
    action: {
      nextLink: {
        href: '/admin/shoots',
      },
    },
  },
  {
    image: { src: '/static/images/springboard-quote.jpg', alt: 'Packages' },
    text: 'Manage Packages',
    action: {
      nextLink: {
        href: '/admin/packages',
      },
    },
  },
  {
    image: { src: '/static/images/springboard-weddings.jpg', alt: 'Weddings' },
    text: 'Manage Products',
    action: {
      nextLink: {
        href: '/admin/products',
      },
    },
  },
];

export default springboards;
