import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import CONTROLS from './controls';
import styles from './styles';

import IconButton from '../../IconButton';

const ControlPanel = ({ children }) => {
  return (
    <div className="container">
      {CONTROLS.map((control) => {
        const { iconName, label, link } = control;
        const { href, as } = link;

        return (
          <Link key={label} href={href} as={as}>
            <div className="row">
              <IconButton iconName={iconName} label={label} handleClick={null} />

              <span className="spacer-hz" />
            </div>
          </Link>
        );
      })}

      {children}

      <style jsx>{styles}</style>
    </div>
  );
};

ControlPanel.propTypes = {
  children: PropTypes.node,
};
ControlPanel.defaultProps = {};

export default ControlPanel;
