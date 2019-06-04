import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { SwipeableDrawer } from '@material-ui/core';

import styles from './styles';

import Logo from '../../Logo';
import Icon from '../../Icon';
import withLinks from '../withLinks';

export class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.onOpenMenu = this.onOpenMenu.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
    this.setShowMenu = this.setShowMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setHasShadow = this.setHasShadow.bind(this);

    this.state = {
      showMenu: false,
      hasShadow: false,
    };
  }

  static propTypes = {
    /*
     * withLinks
     */
    links: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onOpenMenu() {
    this.setShowMenu(true);
  }

  onCloseMenu() {
    this.setShowMenu(false);
  }

  setShowMenu(showMenu) {
    this.setState({
      showMenu,
    });
  }

  handleScroll() {
    const { scrollY } = window;

    if (scrollY !== 0) {
      this.setHasShadow(true);
    } else {
      this.setHasShadow(false);
    }
  }

  setHasShadow(hasShadow) {
    this.setState({
      hasShadow,
    });
  }

  render() {
    const { showMenu, hasShadow } = this.state;
    const { links } = this.props;

    return (
      <div className={`container hidden-md-up ${hasShadow ? 'shadow-lg' : ''}`}>
        <div className="logo-container">
          <Logo />
        </div>

        <div className="buttonContainer">
          <button type="button" onClick={this.onOpenMenu}>
            <Icon name="menu" />
          </button>
        </div>

        <SwipeableDrawer
          anchor="right"
          open={showMenu}
          onClose={this.onCloseMenu}
          onOpen={this.onOpenMenu}
        >
          <ul>
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href} prefetch={link.prefetch} as={link.as}>
                    <span className={`nav-link clickable ${link.isActive ? 'active' : ''}`}>
                      {link.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SwipeableDrawer>

        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default withLinks(Mobile);
