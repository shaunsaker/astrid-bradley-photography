import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string })),
  };

  static defaultProps = {};

  render() {
    const { children } = this.props;

    return (
      <div id="scroller" className="container">
        {children.map((item) => {
          const { key } = item;

          return (
            <div key={key} className="item-container">
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}
