import app from '../app';
import business from '../business';

const { url } = app;
const { name } = business;
const title =
  'Astrid Bradley Photography | Cape Town, Western Cape | Wedding & Lifestyle Photographer';
const description =
  'Astrid Bradley is a Wedding & Lifestyle Photographer based in Cape Town, South Africa.';

const SEO = {
  title, // default
  description, // default
  keywords:
    'Astrid Bradley, Photography, Cape Town, Weddings, Wedding Prices South Africa, Cape Town Wedding Prices, Best Cape Town Photographer, Book Cape Town Wedding Photographer, Astrid Bradley Photography, East London, Eastern Cape, South Africa, Port Elizabeth Photographer, Eastern Cape Photographer, Professional Photographer Cape Town, Wedding Photography, CT Wedding Photographer, Good Wedding Photographer, South African Photographer',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    image: `${url}/static/images/open-graph.png`,
    imageWidth: 1200,
    imageHeight: 630,
    site_name: name,
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
