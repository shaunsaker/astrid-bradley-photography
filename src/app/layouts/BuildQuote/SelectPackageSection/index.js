import React from 'react';
import PropTypes from 'prop-types';

import { sortArrayOfObjectsByKey } from '../../../utils';
import styles from './styles';

import Grid from '../../../components/Grid';
import PackageItem from '../../../components/PackageItem';

const SelectPackageSection = ({ packages, category, handleSelect }) => {
  const categoryID = category && category.id;

  // Filter out the packages by category
  let relevantPackages = packages.filter((item) => item.category_id === categoryID);

  // Sort by price
  relevantPackages = sortArrayOfObjectsByKey(relevantPackages, 'price');

  return (
    <section>
      <Grid size={3}>
        {relevantPackages.map((item) => {
          const { id } = item;

          return (
            <PackageItem
              key={id}
              packageItem={item}
              action={{
                button: {
                  handleClick: () => handleSelect(item),
                },
              }}
            />
          );
        })}
      </Grid>

      <style jsx>{styles}</style>
    </section>
  );
};

SelectPackageSection.propTypes = {
  // from parent
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  category: PropTypes.shape({ id: PropTypes.string }),
  handleSelect: PropTypes.func,
};
SelectPackageSection.defaultProps = {};

export default SelectPackageSection;
