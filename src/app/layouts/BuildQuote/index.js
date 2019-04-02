import React from 'react';
import PropTypes from 'prop-types';

// import { categories } from '../../config';
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
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setValues = this.setValues.bind(this);

    this.state = {
      slideIndex: 0,
      values: [
        // categories[0],
        // props.packages[0],
        // [{ '8gb-bamboo-flash-drive': 3 }],
        // '2019-05-28',
        // { name: 'Mr Shaun Saker', email: 'info@shaunsaker.com' },
      ],
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
    const { packages, shoots } = this.props;
    const category = values[0];
    const packageItem = values[1];
    const additionalProducts = values[2];
    const shootDate = values[3];
    const clientDetails = values[4];

    // Create the progress items
    const progressItems = SLIDES.map((slide, index) => {
      const { title, state } = slide;
      let isChecked = false;
      let text = title;
      const stateValue = values[index];

      // IF the index does not equal the slideIndex (ie. not on that slide)
      // OR IF its the last slide
      if ((index !== slideIndex && stateValue) || slideIndex === SLIDES.length - 1) {
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

    const customisePackageSectionComponent = packageItem && (
      <CustomisePackageSection
        packageItem={packageItem}
        handleSubmit={(value) => this.onSelectValue(value, 2)}
      />
    );

    const doneSectionComponent = clientDetails && (
      <DoneSection
        packageDetails={packageItem}
        additionalProducts={additionalProducts}
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
              <SelectShootTypeSection
                packages={packages}
                handleSelect={(value) => this.onSelectValue(value, 0)}
              />
            </div>

            <div key="SelectPackageSection" className="slide-container">
              <SelectPackageSection
                packages={packages}
                category={category}
                handleSelect={(value) => this.onSelectValue(value, 1)}
              />
            </div>

            <div key="CustomisePackageSection" className="slide-container">
              {customisePackageSectionComponent}
            </div>

            <div key="CheckAvailabilitySection" className="slide-container">
              <CheckAvailabilitySection
                shoots={shoots}
                handleSubmit={(value) => this.onSelectValue(value, 3)}
              />
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

BuildQuote.propTypes = {
  // getInitialProps
  packages: PropTypes.arrayOf(PropTypes.shape({})),
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
BuildQuote.defaultProps = {};

export default BuildQuote;
