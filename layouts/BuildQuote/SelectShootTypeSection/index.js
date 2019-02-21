import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../../config';
import styles from './styles';

import Grid from '../../../components/Grid';
import Springboard from '../../../components/Springboard';

const SelectShootTypeSection = ({ packageCategories, handleSelectShootType }) => {
  return (
    <section className="flex row">
      <Grid size={2}>
        {packageCategories.map((categoryID) => {
          const category = categories.filter((item) => item.id === categoryID)[0];
          const { name, id } = category;
          const imageSrc = `static/images/springboard-${id}.jpg`;
          const action = {
            button: {
              handleClick: () => handleSelectShootType(category),
            },
          };

          return (
            <Springboard
              key={name}
              image={{
                src: imageSrc,
                alt: name,
              }}
              text={name}
              action={action}
            />
          );
        })}
      </Grid>

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
