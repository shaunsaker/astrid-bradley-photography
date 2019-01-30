import React, { Fragment } from 'react';
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
          <Link href={href} as={as}>
            <Fragment key={label}>
              <IconButton iconName={iconName} label={label} handleClick={null} />

              <div className="spacer-hz" />
            </Fragment>
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
