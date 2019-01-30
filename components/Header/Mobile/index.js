import React from 'react';
import PropTypes from 'prop-types';
import { MdMenu as MenuIcon } from 'react-icons/md';

import { colors } from '../../../static/styles/styleConstants';
import styles from './styles';

import Logo from '../../Logo';
import Menu from './Menu';

export class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      showMenu: false,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  toggleMenu() {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu,
    });
  }

  render() {
    const { showMenu } = this.state;
    const menuComponent = showMenu && <Menu handleClose={this.toggleMenu} />;

    return (
      <div className="container hidden-md-up">
        <div className="buttonContainer">
          <button type="button" onClick={this.toggleMenu}>
            <MenuIcon size={24} color={colors.black} />
          </button>
        </div>

        <Logo />

        {menuComponent}

        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Mobile;
