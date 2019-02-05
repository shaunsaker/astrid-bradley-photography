import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

import IconButton from '../IconButton';

const ControlPanel = ({ controls, children }) => {
  return (
    <div className="container">
      {controls.map((control, index) => {
        const { iconName, label, link, handleClick } = control;

        // IF its not the last control
        // THEN display the spacer
        const spacerComponent = index < controls.length - 1 && <div className="spacer-hz" />;
        const contentComponent = (
          <div className="row">
            <IconButton iconName={iconName} label={label} handleClick={handleClick} />

            {spacerComponent}
          </div>
        );

        if (link) {
          const { href, as } = link;

          return (
            <Link key={label} href={href} as={as}>
              {contentComponent}
            </Link>
          );
        }

        return <div key={label}>{contentComponent}</div>;
      })}

      {children}

      <style jsx>{styles}</style>
    </div>
  );
};

ControlPanel.propTypes = {
  controls: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string,
      label: PropTypes.string,
      link: PropTypes.shape({
        href: PropTypes.string,
        as: PropTypes.string,
      }),
      handleClick: PropTypes.func,
    }),
  ),
  children: PropTypes.node,
};
ControlPanel.defaultProps = {};

export default ControlPanel;
