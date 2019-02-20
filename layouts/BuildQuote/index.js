import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import ProgressSection from './ProgressSection';
import SelectShootTypeSection from './SelectShootTypeSection';
import SelectPackageSection from './SelectPackageSection';
import ContactButton from '../../components/ContactButton';

class BuildQuote extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectShootType = this.onSelectShootType.bind(this);
    this.setCategoryID = this.setCategoryID.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);

    this.state = {
      slideIndex: 0,
    };
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
    const { slideIndex, categoryID } = this.state;
    console.log(slideIndex, categoryID);

    return (
      <Layout title="Build Quote">
        <ProgressSection slideIndex={slideIndex} />

        <div className="spacer-vt" />

        <div>
          <SelectShootTypeSection handleSelectShootType={this.onSelectShootType} />

          <SelectPackageSection />
        </div>

        <ContactButton />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

export default BuildQuote;
