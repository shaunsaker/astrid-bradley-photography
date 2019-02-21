import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Form from '../../../components/Form';

export default class CheckAvailabilitySection extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  onSubmit() {}

  render() {
    const fields = [
      {
        type: 'date',
        name: 'date',
        label: 'Enter your shoot date',
        isRequired: true,
      },
    ];

    return (
      <div className="container">
        <Form formName="availability" fields={fields} handleSubmit={this.onSubmit} />

        <style jsx>{styles}</style>
      </div>
    );
  }
}
