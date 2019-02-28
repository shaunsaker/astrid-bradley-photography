import React from 'react';
import PropTypes from 'prop-types';

import SPRINGBOARDS from './springboards';
import styles from './styles';

import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Springboard from '../../components/Springboard';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../enhancers/withAuth';

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

        <Grid size={2}>
          {otherSpringboards.map((springboard) => {
            const { text } = springboard;

            return <Springboard key={text} {...springboard} />;
          })}
        </Grid>

        <ControlPanel
          controls={[{ iconName: 'lock', label: 'Sign Out', handleClick: this.signOut }]}
        />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

export default withAuth(Admin);
