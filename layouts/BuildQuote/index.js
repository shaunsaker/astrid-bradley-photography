import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import ProgressSection from './ProgressSection';
import Slider from '../../components/Slider';
import SelectShootTypeSection from './SelectShootTypeSection';
import SelectPackageSection from './SelectPackageSection';
import ContactButton from '../../components/ContactButton';

class BuildQuote extends React.Component {
  constructor(props) {
    super(props);

    this.onProgressItemClick = this.onProgressItemClick.bind(this);
    this.onSelectShootType = this.onSelectShootType.bind(this);
    this.setCategoryID = this.setCategoryID.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);

    this.state = {
      slideIndex: 0,
    };
  }

  onProgressItemClick(index) {
    this.setSlideIndex(index);
  }

  onSelectShootType(shootType) {
    const { slideIndex } = this.state;

    this.setCategoryID(shootType);
    this.setSlideIndex(slideIndex + 1);
  }

  setCategoryID(categoryID) {
    this.setState({
      categoryID,
    });
  }

  setSlideIndex(slideIndex) {
    this.setState({
      slideIndex,
    });
  }

  render() {
    const { slideIndex } = this.state;

    return (
      <Layout title="Build Quote">
        <ProgressSection
          slideIndex={slideIndex}
          handleProgressItemClick={this.onProgressItemClick}
        />

        <div className="spacer-vt" />

        <Slider slideIndex={slideIndex}>
          <SelectShootTypeSection
            key="SelectShootTypeSection"
            handleSelectShootType={this.onSelectShootType}
          />

          <SelectPackageSection key="SelectPackageSection" />
        </Slider>

        <ContactButton />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

export default BuildQuote;
