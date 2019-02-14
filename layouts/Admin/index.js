import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import Springboard from '../../components/Springboard';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.onSignOut = this.onSignOut.bind(this);
    this.signOut = this.signOut.bind(this);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onSignOut() {
    this.signOut();
  }

  signOut() {
    const { dispatch } = this.props;

    dispatch({
      type: 'signOut',
      meta: {
        nextAction: {
          type: 'SIGN_OUT_USER',
          // TODO: How to also display error message?
        },
      },
    });
  }

  render() {
    return (
      <Layout title="Admin Dashboard">
        <section className="flex row">
          <Springboard
            image={{ src: '/static/images/springboard-lifestyle.jpg', alt: 'Shoots' }}
            text="Manage Shoots"
            action={{
              nextLink: {
                href: '/admin/shoots',
              },
            }}
          />

          <div className="spacer-hz" />

          <Springboard
            image={{ src: '/static/images/springboard-quote.jpg', alt: 'Packages' }}
            text="Manage Packages"
            action={{
              nextLink: {
                href: '/admin/packages',
              },
            }}
          />
        </section>

        <ControlPanel
          controls={[{ iconName: 'lock', label: 'Sign Out', handleClick: this.signOut }]}
        />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

export default withAuth(Admin);
