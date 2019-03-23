import app from '../app';

const { url } = app;
const title = 'Astrid Bradley Photography';
const description = 'Wedding and Lifestyle Photographer based in Cape Town';

const SEO = {
  title, // default
  description, // default
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    image: `${url}/static/images/open-graph.png`,
    imageWidth: 1200,
    imageHeight: 630,
    site_name: title,
  },
  richText: {
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
    streetAddress: 'Tuscan Waters, Gie Rd, Tableview',
    addressLocality: 'Cape Town',
    postalCode: '7441',
    addressCountry: 'South Africa',
    priceRange: '$$$$$',
  },
};

export default SEO;
