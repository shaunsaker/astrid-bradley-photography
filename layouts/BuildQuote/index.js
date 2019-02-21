import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../config';
import SLIDES from './slides';
import styles from './styles';

import Layout from '../../components/Layout';
import ProgressSection from './ProgressSection';
import Slider from '../../components/Slider';
import SelectShootTypeSection from './SelectShootTypeSection';
import SelectPackageSection from './SelectPackageSection';
import CheckAvailabilitySection from './CheckAvailabilitySection';
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
      slideIndex: 2,
      values: [categories[0], props.packages[0], '2019-02-26'],
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
    const packageItem = values[1];

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
      <Layout title={`Build Quote${packageItem ? ` - R${packageItem.price}` : ''}`}>
        <ProgressSection
          items={progressItems}
          itemIndex={slideIndex}
          handleProgressItemClick={this.onProgressItemClick}
        />

        <div className="slider-container">
          <Slider slideIndex={slideIndex}>
            <div key="SelectShootTypeSection" className="slide-container">
              <SelectShootTypeSection handleSelectShootType={this.onSelectValue} />
            </div>

            <div key="SelectPackageSection" className="slide-container">
              <SelectPackageSection category={category} handleSelectPackage={this.onSelectValue} />
            </div>

            <div key="CheckAvailabilitySection" className="slide-container">
              <CheckAvailabilitySection handleSubmitDate={this.onSelectValue} />
            </div>
          </Slider>
        </div>

        <ContactButton />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

const mapStateToProps = (state) => {
  const { packages } = state;

  return {
    packages,
  };
};

export default connect(mapStateToProps)(BuildQuote);
