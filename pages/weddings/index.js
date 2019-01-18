import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SpringboardsSection from '../../layouts/SpringboardsSection';
import ContactButtonSection from '../../layouts/ContactButtonSection';

const Weddings = () => {
  const springboards = [
    {
      image: {
        src: 'http://media.withtank.com/594b80eb26/gareth_teneille-wedding.jpg',
        alt: 'GARETH & TENEILLE WEDDING',
      },
      text: 'GARETH & TENEILLE WEDDING',
      href: null,
    },
    {
      image: {
        src:
          'http://media.withtank.com/71cc1565d4/antonio_lindsay-wedding-silvermist-wine-estate.jpg',
        alt: 'ANTONIO & LINDSAY WEDDING',
      },
      text: 'ANTONIO & LINDSAY WEDDING',
      href: null,
    },
  ];

  return (
    <Page>
      <Header />

      <main>
        <SpringboardsSection springboards={springboards} />
      </main>

      <Footer />

      <ContactButtonSection />
    </Page>
  );
};

Weddings.propTypes = {};
Weddings.defaultProps = {};

export default Weddings;
