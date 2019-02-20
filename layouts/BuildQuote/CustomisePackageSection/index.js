import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

const CustomisePackageSection = ({ packageItem }) => {
  console.log(packageItem);

  return (
    <section className="container">
      <style jsx>{styles}</style>
    </section>
  );
};

CustomisePackageSection.propTypes = {};
CustomisePackageSection.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(CustomisePackageSection);
