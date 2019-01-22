import React from 'react';
import PropTypes from 'prop-types';

import { getCollection } from '../../services/firestore';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SpringboardsSection from '../../layouts/SpringboardsSection';
import ContactButtonSection from '../../layouts/ContactButtonSection';

const Category = ({ shoots }) => {
  const springboards = shoots.map((shoot) => {
    const { name, cover_photo_url, id } = shoot;

    return {
      image: { src: cover_photo_url, alt: name },
      text: name,
      href: `/shoot?id=${id}`,
    };
  });

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

Category.getInitialProps = async ({ query }) => {
  const categoryID = query.id;
  let shoots = [];

  if (categoryID) {
    shoots = await getCollection({
      url: 'shoots',
      query: ['category_id', '==', categoryID],
    });
  }

  return { shoots };
};

Category.propTypes = {
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
Category.defaultProps = {};

export default Category;
