import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import SpringboardsSection from '../../components/SpringboardsSection';
import ContactButton from '../../components/ContactButton';

const Category = ({ categoryID, shoots }) => {
  const title = categoryID.replace('-', ' '); // FIXME: Title could come from db categories collection (overkill for now)

  // Filter on category_id
  // IF photos exist
  // IF not archived
  // Map to springboards data type
  const springboards = shoots
    .filter((shoot) => shoot.category_id === categoryID && shoot.photos && !shoot.archived)
    .map((shoot) => {
      const { name, cover_photo_url, id } = shoot;

      return {
        image: { src: cover_photo_url, alt: name },
        text: name,
        link: { href: `/shoot?id=${id}`, as: `/shoot/${id}` },
      };
    });

  return (
    <Layout title={title}>
      <SpringboardsSection springboards={springboards} />

      <ContactButton />
    </Layout>
  );
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
