import React from 'react';
import PropTypes from 'prop-types';

import SLIDES from './slides';
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
    this.onSelectValue = this.onSelectValue.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setValues = this.setValues.bind(this);

    this.state = {
      slideIndex: 0,
      values: [],
    };
  }

  onProgressItemClick(index) {
    const { values } = this.state;

    // Remove the values in state after the index
    values.splice(index, values.length);

    this.setValues(values);
    this.setSlideIndex(index);
  }

  onSelectValue(value) {
    const { slideIndex } = this.state;

    this.setValue(value);
    this.setSlideIndex(slideIndex + 1);
  }

  setSlideIndex(slideIndex) {
    this.setState({
      slideIndex,
    });
  }

  setValue(value) {
    const { values } = this.state;

    values.push(value);

    this.setValues(values);
  }

  setValues(values) {
    this.setState({
      values,
    });
  }

  render() {
    const { slideIndex, values } = this.state;
    const category = values[0];

    // Create the progress items
    const progressItems = SLIDES.map((slide, index) => {
      const { title, showStateValue, stateValueLabel } = slide;
      let isChecked;
      let text = title;
      const value = values[index];

      // IF the index does not equal the slideIndex (ie. not on that slide)
      if (index !== slideIndex && value) {
        isChecked = true;
        text = showStateValue ? `${stateValueLabel}: ${value.name}` : text;
      }

      return {
        text,
        isChecked,
      };
    });

    return (
      <Layout title="Build Quote">
        <ProgressSection
          items={progressItems}
          itemIndex={slideIndex}
          handleProgressItemClick={this.onProgressItemClick}
        />

        <div className="spacer-vt" />

        <Slider slideIndex={slideIndex}>
          <SelectShootTypeSection
            key="SelectShootTypeSection"
            handleSelectShootType={this.onSelectValue}
          />

          <SelectPackageSection
            key="SelectPackageSection"
            category={category}
            handleSelectPackage={this.onSelectValue}
          />
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
