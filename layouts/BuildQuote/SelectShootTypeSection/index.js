import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../../config';
import styles from './styles';

import Springboard from '../../../components/Springboard';

const SelectShootTypeSection = ({ packageCategories, handleSelectShootType }) => {
  // TODO: Should be grid

  return (
    <section className="flex row">
      {packageCategories.map((categoryID, index) => {
        const category = categories.filter((item) => item.id === categoryID)[0];
        const { name, id } = category;
        const imageSrc = `static/images/springboard-${id}.jpg`;

        // Add a spacer for every odd item
        const spacerComponent = index % 2 === 0 && <div className="spacer-hz" />;

        return (
          <Fragment key={id}>
            <Springboard
              image={{
                src: imageSrc,
                alt: name,
              }}
              text={name}
              action={{
                handleClick: () => handleSelectShootType(id),
              }}
            />

            {spacerComponent}
          </Fragment>
        );
      })}

      <style jsx>{styles}</style>
    </section>
  );
};

SelectShootTypeSection.propTypes = {
  packageCategories: PropTypes.arrayOf(PropTypes.string),
  handleSelectShootType: PropTypes.func,
};
SelectShootTypeSection.defaultProps = {};

const mapStateToProps = (state) => {
  const { packages } = state;
  const packageCategories = [];

  packages.forEach((item) => {
    const { category_id } = item;
    const isPackageCategoryPresent = packageCategories.includes(category_id);

    // IF its not present, add it to packageCategories
    if (!isPackageCategoryPresent) {
      packageCategories.push(category_id);
    }
  });

  return {
    packageCategories,
  };
};

export default connect(mapStateToProps)(SelectShootTypeSection);
