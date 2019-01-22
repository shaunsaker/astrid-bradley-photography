import React from 'react';
import PropTypes from 'prop-types';

import { getCollection } from '../../services/firestore';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SpringboardsSection from '../../layouts/SpringboardsSection';
import ContactButtonSection from '../../layouts/ContactButtonSection';

const Category = ({ shoots }) => {
  const categoriesArr = [];

  return (
    <Page>
      <Header />

      <main>
        <SpringboardsSection springboards={categoriesArr} />
      </main>

      <Footer />

      <ContactButtonSection />
    </Page>
  );
};

Category.getInitialProps = async ({ query }) => {
  const categoryID = query.categoryID || ''; // query param of category_id for example, will break the app
  const shoots = await getCollection('shoots', ['category_id', '==', categoryID]);

  return { shoots };
};

Category.propTypes = {
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
Category.defaultProps = {};

export default Category;
