import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

Category.getInitialProps = async ({ query }) => {
  const categoryID = query.id;

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
