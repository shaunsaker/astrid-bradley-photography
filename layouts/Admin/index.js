import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SPRINGBOARDS from './springboards';
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
    const firstSpringboard = SPRINGBOARDS[0];
    const otherSpringboards = SPRINGBOARDS.slice(1, 3);

    return (
      <Layout title="Admin Dashboard">
        <section className="flex row">
          <Springboard {...firstSpringboard} />
        </section>

        <section className="flex row">
          {otherSpringboards.map((springboard, index) => {
            const { text } = springboard;

            // Add a spacer for every odd item
            const spacerComponent = index % 2 === 0 && <div className="spacer-hz" />;

            return (
              <Fragment key={text}>
                <Springboard {...springboard} />

                {spacerComponent}
              </Fragment>
            );
          })}
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
