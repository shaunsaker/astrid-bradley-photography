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
import CustomisePackageSection from './CustomisePackageSection';
import CheckAvailabilitySection from './CheckAvailabilitySection';
import EnterInfoSection from './EnterInfoSection';
import DoneSection from './DoneSection';
import ContactButton from '../../components/ContactButton';

class BuildQuote extends React.Component {
  constructor(props) {
    super(props);

    this.onProgressItemClick = this.onProgressItemClick.bind(this);
    this.onSelectValue = this.onSelectValue.bind(this);
    this.onSubmitCustomisedPackage = this.onSubmitCustomisedPackage.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setValues = this.setValues.bind(this);

    this.state = {
      slideIndex: 2,
      values: [categories[0], props.packages[0]],
    };
  }

  onProgressItemClick(index) {
    const { values } = this.state;

    // Remove the values in state after the index
    values.splice(index, values.length);

    this.setValues(values);
    this.setSlideIndex(index);
  }

  onSelectValue(value, targetSlideIndex) {
    const { slideIndex } = this.state;

    // This will alleviate bugs from double clicks
    if (slideIndex === targetSlideIndex) {
      this.setValue(value);
      this.setSlideIndex(slideIndex + 1);
    }
  }

  onSubmitCustomisedPackage() {
    const { slideIndex } = this.state;

    // TODO: Set new packageItem
    this.setValue(null, 2); // set a null value as a placeholder so that our progress items work correctly
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
    // FIXME: Use object as values in state
    const { slideIndex, values } = this.state;
    const category = values[0];
    const packageItem = values[1];
    const shootDate = values[3];
    const clientDetails = values[4];

    // Create the progress items
    const progressItems = SLIDES.map((slide, index) => {
      const { title, state } = slide;
      let isChecked = false;
      let text = title;
      const stateValue = values[index];

      // IF the index does not equal the slideIndex (ie. not on that slide)
      // OR IF its past the customise slide (index 2)
      // OR IF its the last slide
      if (
        (index !== slideIndex && stateValue) ||
        (index === 2 && slideIndex > index) ||
        slideIndex === SLIDES.length - 1
      ) {
        isChecked = true;

        if (state) {
          const { label, key } = state;
          const value = key ? stateValue[key] : stateValue;

          text = `${label}: ${value}`;
        }
      }

      return {
        text,
        isChecked,
      };
    });

    const doneSectionComponent = clientDetails && (
      <DoneSection
        packageDetails={packageItem}
        shootDate={shootDate}
        clientDetails={clientDetails}
      />
    );

    return (
      <Layout title="Build Quote">
        <ProgressSection
          items={progressItems}
          itemIndex={slideIndex}
          handleProgressItemClick={this.onProgressItemClick}
        />

        <div className="slider-container">
          <Slider slideIndex={slideIndex}>
            <div key="SelectShootTypeSection" className="slide-container">
              <SelectShootTypeSection handleSelect={(value) => this.onSelectValue(value, 0)} />
            </div>

            <div key="SelectPackageSection" className="slide-container">
              <SelectPackageSection
                category={category}
                handleSelect={(value) => this.onSelectValue(value, 1)}
              />
            </div>

            <div key="CustomisePackageSection" className="slide-container">
              <CustomisePackageSection
                packageItem={packageItem}
                handleSubmit={this.onSubmitCustomisedPackage}
              />
            </div>

            <div key="CheckAvailabilitySection" className="slide-container">
              <CheckAvailabilitySection handleSubmit={(value) => this.onSelectValue(value, 3)} />
            </div>

            <div key="EnterInfoSection" className="slide-container">
              <EnterInfoSection handleSubmit={(value) => this.onSelectValue(value, 4)} />
            </div>

            <div key="DoneSection" className="slide-container">
              {doneSectionComponent}
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
