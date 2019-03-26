import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { firstCharToUpperCase, sortArrayOfObjectsByKey } from '../../utils';
import { categories } from '../../config';

import Layout from '../../components/Layout';
import LoadingSection from '../../components/LoadingSection';
import SpringboardsSection from '../../components/SpringboardsSection';
import ContactButton from '../../components/ContactButton';

const Category = ({ router, shoots }) => {
  const categoryID = router.query.id;
  const title = firstCharToUpperCase(categoryID.replace('-', ' ')); // FIXME: Title could come from db categories collection (overkill for now)
  const { description } = categories.filter((item) => item.id === categoryID)[0];

  // Filter on category_id
  // IF cover photo exists
  // IF photos exist
  // IF not archived
  const relevantShoots = shoots.filter(
    (shoot) =>
      shoot.category_id === categoryID && shoot.cover_photo && shoot.photos && !shoot.archived,
  );

  // Sort by order
  // IF we should sort by order
  // ELSE sort by date of the shoot (and reverse to show the latest first)
  const shouldSortByOrder = relevantShoots[0] && relevantShoots[0].order;
  const sortedShoots = sortArrayOfObjectsByKey(
    relevantShoots,
    shouldSortByOrder ? 'order' : 'date',
    shouldSortByOrder ? false : true,
  );

  // Map to springboards data type
  const springboards = sortedShoots.map((shoot) => {
    const { name, cover_photo, id } = shoot;

    return {
      image: cover_photo,
      text: name,
      action: {
        nextLink: { href: `/shoot?id=${id}`, as: `/shoot/${id}` },
      },
    };
  });

  const springboardsComponent = shoots ? (
    <SpringboardsSection springboards={springboards} />
  ) : (
    <LoadingSection />
  );

  return (
    <Layout title={title} description={description}>
      {springboardsComponent}

      <ContactButton />
    </Layout>
  );
};

Category.propTypes = {
  // connect
  shoots: PropTypes.arrayOf(
    PropTypes.shape({
      category_id: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
      cover_photo_url: PropTypes.string,
    }),
  ),

  // withRouter
  router: PropTypes.shape({ query: PropTypes.shape({ id: PropTypes.string }) }),
};
Category.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withRouter(connect(mapStateToProps)(Category));
