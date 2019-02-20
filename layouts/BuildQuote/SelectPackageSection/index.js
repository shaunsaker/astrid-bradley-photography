import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import PackageItem from '../../../components/PackageItem';

const SelectPackageSection = ({ packages, category, handleSelectPackage }) => {
  const categoryID = category && category.id;

  // Filter out the packages by category
  const relevantPackages = packages.filter((item) => item.category_id === categoryID);

  return (
    <section className="flex row wrap">
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
