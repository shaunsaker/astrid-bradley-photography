import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sortArrayOfObjectsByKey } from '../../../utils';
import styles from './styles';

import Grid from '../../../components/Grid';
import PackageItem from '../../../components/PackageItem';

const SelectPackageSection = ({ packages, category, handleSelectPackage }) => {
  const categoryID = category.id;

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
                  handleClick: () => handleSelectPackage(item),
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
  // connect
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  // from parent
  category: PropTypes.shape({ id: PropTypes.string }),
  handleSelectPackage: PropTypes.func,
};
SelectPackageSection.defaultProps = {};

const mapStateToProps = (state) => {
  const { packages } = state;

  return {
    packages,
  };
};

export default connect(mapStateToProps)(SelectPackageSection);
