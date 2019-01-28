import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SpringboardsSection from '../../components/SpringboardsSection';
import ContactButton from '../../components/ContactButton';

const Category = ({ categoryID, shoots }) => {
  const title = categoryID.replace('-', ' '); // FIXME: Title could come from db categories collection (overkill for now)

  // Filter on category_id AND
  // IF photos exist
  // Map to springboards data type
  const springboards = shoots
    .filter((shoot) => shoot.category_id === categoryID && shoot.photos)
    .map((shoot) => {
      const { name, cover_photo_url, id } = shoot;

      return {
        image: { src: cover_photo_url, alt: name },
        text: name,
        link: { href: `/shoot?id=${id}`, as: `/shoot/${id}` },
      };
    });

  return (
    <Page>
      <Header />

      <main>
        <h1>{title}</h1>

        <SpringboardsSection springboards={springboards} />
      </main>

      <Footer />

      <ContactButton />
    </Page>
  );
};

Category.getInitialProps = async ({ query }) => {
  const categoryID = query.id;

  return { categoryID };
};

Category.propTypes = {
  categoryID: PropTypes.string,
  shoots: PropTypes.arrayOf(
    PropTypes.shape({
      category_id: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
      cover_photo_url: PropTypes.string,
    }),
  ),
};
Category.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default connect(mapStateToProps)(Category);
