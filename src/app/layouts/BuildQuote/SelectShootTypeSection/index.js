import React from 'react';
import PropTypes from 'prop-types';

import { categories } from '../../../config';
import styles from './styles';

import Grid from '../../../components/Grid';
import Springboard from '../../../components/Springboard';

const SelectShootTypeSection = ({ packages, handleSelect }) => {
  const packageCategories = [];

  packages.forEach((item) => {
    const { category_id } = item;
    const isPackageCategoryPresent = packageCategories.includes(category_id);

    // IF its not present, add it to packageCategories
    if (!isPackageCategoryPresent) {
      packageCategories.push(category_id);
    }
  });

  return (
    <section className="flex row">
      <Grid size={2}>
        {packageCategories.map((categoryID) => {
          const category = categories.filter((item) => item.id === categoryID)[0];
          const { name, id } = category;
          const imageSrc = `/static/images/springboard-${id}.jpg`;
          const action = {
            button: {
              handleClick: () => handleSelect(category),
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
  packages: PropTypes.arrayOf(PropTypes.shape({ category_id: PropTypes.string })),
  handleSelect: PropTypes.func,
};
SelectShootTypeSection.defaultProps = {};

export default SelectShootTypeSection;
