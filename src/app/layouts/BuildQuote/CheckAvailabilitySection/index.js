import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { colors } from '../../../static/styles/styleConstants';
import styles from './styles';

import Form from '../../../components/Form';
import ParagraphText from '../../../components/ParagraphText';

export class CheckAvailabilitySection extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmitDate = this.onSubmitDate.bind(this);
    this.setDate = this.setDate.bind(this);

    this.state = {
      date: '',
    };
  }

  static propTypes = {
    // connect
    shoots: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.string })),
    // parent
    handleSubmit: PropTypes.func,
  };

  static defaultProps = {};

  onChangeDate(name, date) {
    this.setDate(date);
  }

  onSubmitDate() {
    const { date } = this.state;
    const { handleSubmit } = this.props;

    handleSubmit(date);
  }

  setDate(date) {
    this.setState({
      date,
    });
  }

  render() {
    const { date } = this.state;
    const { shoots } = this.props;
    const shootDate = date && new Date(date);
    const shootTime = shootDate && shootDate.getTime();
    const now = Date.now();
    const isDateValid = date && shootTime > now;
    const isDateAvailable = date && !shoots.filter((shoot) => shoot.date === date).length;
    let text;
    let textStyles;
    let isSubmitDisabled = true;

    if (date) {
      textStyles = {
        color: colors.red,
        transition: 'color 0.5s ease',
      };

      if (isDateValid) {
        if (isDateAvailable) {
          text = 'Yay! Astrid is available on this date.';
          isSubmitDisabled = false;
          textStyles.color = colors.green;
        } else {
          text = 'Astrid is unfortunately not available on this date. Please select another.';
        }
      } else {
        text = 'This date has passed. Please select a date in the future.';
      }
    } else {
      text = 'Please enter your shoot date to continue.';
    }

    const fields = [
      {
        type: 'date',
        name: 'date',
        value: date,
        label: 'Date',
        isRequired: true,
      },
    ];

    return (
      <section className="container">
        <ParagraphText style={textStyles}>{text}</ParagraphText>

        <div className="spacer-vt" />

        <Form
          formName="availability"
          fields={fields}
          handleChange={this.onChangeDate}
          handleSubmit={this.onSubmitDate}
          submitText="Continue"
          isSubmitDisabled={isSubmitDisabled}
        />

        <style jsx>{styles}</style>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { shoots } = state;

  return {
    shoots,
  };
};

export default connect(mapStateToProps)(CheckAvailabilitySection);
