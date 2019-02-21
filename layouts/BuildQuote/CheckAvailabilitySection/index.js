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
    handleSubmitDate: PropTypes.func,
  };

  static defaultProps = {};

  onChangeDate(name, date) {
    this.setDate(date);
  }

  onSubmitDate() {
    const { date } = this.state;
    const { handleSubmitDate } = this.props;

    handleSubmitDate(date);
  }

  setDate(date) {
    this.setState({
      date,
    });
  }

  render() {
    const { date } = this.state;
    const { shoots } = this.props;
    const isDateAvailable = date && !shoots.filter((shoot) => shoot.date === date).length;
    const text = date
      ? isDateAvailable
        ? 'Yay! Astrid is available on this date.'
        : 'Astrid is unfortunately not available on this date. Please select another.'
      : 'Please enter your shoot date to continue.';
    const textStyles = date
      ? { color: isDateAvailable ? colors.green : colors.red, transition: 'color 0.5s ease' }
      : null;
    const submitDisabled = !isDateAvailable;
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
      <div className="container">
        <ParagraphText style={textStyles}>{text}</ParagraphText>

        <div className="spacer-vt" />

        <Form
          formName="availability"
          fields={fields}
          handleChange={this.onChangeDate}
          handleSubmit={this.onSubmitDate}
          submitText="Continue"
          submitDisabled={submitDisabled}
        />

        <style jsx>{styles}</style>
      </div>
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
