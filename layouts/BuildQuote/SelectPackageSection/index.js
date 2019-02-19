import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import PackageItem from '../../../components/PackageItem';

const SelectPackageSection = ({ packages, handleSelectPackage }) => {
  return (
    <section className="flex row wrap">
      {packages.map((item) => {
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
