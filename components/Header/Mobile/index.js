import React from 'react';

import styles from './styles';

import Logo from '../../Logo';
import Icon from '../../Icon';
import Menu from './Menu';

export class Mobile extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.setHasShadow = this.setHasShadow.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      showMenu: false,
      hasShadow: false,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  toggleMenu() {
    const { showMenu } = this.state;

    this.setState({
      showMenu: !showMenu,
    });
  }

  render() {
    const { showMenu, hasShadow } = this.state;
    const menuComponent = showMenu && <Menu handleClose={this.toggleMenu} />;

    return (
      <div className={`container hidden-md-up ${hasShadow && 'shadow-lg'}`}>
        <div className="buttonContainer">
          <button type="button" onClick={this.toggleMenu}>
            <Icon name="menu" />
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
