import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

import IconButton from '../IconButton';

const ControlPanel = ({ controls }) => {
  return (
    <div className="container">
      {controls.map((control) => {
        const { iconName, label, link, handleClick } = control;
        const contentComponent = (
          <div className="row">
            <IconButton iconName={iconName} label={label} handleClick={handleClick} />

            <div className="spacer-hz" />
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
};
ControlPanel.defaultProps = {};

export default ControlPanel;
