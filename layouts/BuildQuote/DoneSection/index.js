import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class DoneSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    // TODO:
    // Download quote
    // Confirm booking

    return (
      <div style={styles.container}>
        <div />
      </div>
    );
  }
}
