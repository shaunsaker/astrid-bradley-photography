import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCollection } from '../../services/firestore';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SpringboardsSection from '../../layouts/SpringboardsSection';
import ContactButtonSection from '../../layouts/ContactButtonSection';

const Category = ({ categoryID, shoots }) => {
  // Filter on category_id
  // Map to springboards data type
  const springboards = shoots
    .filter((shoot) => shoot.category_id === categoryID)
    .map((shoot) => {
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

Category.getInitialProps = async ({ store, isServer, query }) => {
  const categoryID = query.id;
  const { shoots } = store.getState();

  // Only fetch new shoots if
  // We're rendering on the server OR
  // We're rendering on the client AND we don't already have shoots for that category
  const shouldFetchShoots =
    isServer || (!isServer && !shoots.filter((shoot) => shoot.category_id === categoryID).length);

  // Only fetch shoots if (see above)
  // and the categoryID was supplied
  if (shouldFetchShoots && categoryID) {
    const newShoots = await getCollection({
      url: 'shoots',
      query: ['category_id', '==', categoryID],
    });

    // Group the existing shoots and the new shoots
    // NOTE: This assumes newShoots are of a different category AND
    // Shoots were not updated during the session
    const data = [...shoots, ...newShoots];

    // Update the store
    store.dispatch({ type: 'SET_SHOOTS', payload: { data } });
  }

  return { categoryID };
};

Category.propTypes = {
  categoryID: PropTypes.string,
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
Category.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default connect(mapStateToProps)(Category);
