import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import FormSection from '../../../components/admin/add-shoot/FormSection';
import Footer from '../../../components/Footer';

class AddShoot extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  static getInitialProps = async () => {};

  static propTypes = {
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onSubmit(values) {
    const shoot = values;

    // Replace the date value with js time (in ms)
    const time = new Date(shoot.date).getTime();
    shoot.date = time;

    this.saveShoot(shoot);
  }

  saveShoot(shoot) {
    const { dispatch } = this.props;
    const document = shoot;

    // Use the name as the id
    const id = shoot.name
      .split(' ')
      .join('-')
      .toLowerCase();

    // Add a date created field with the current time
    document.date_created = Date.now();

    dispatch({
      type: 'addDocument',
      payload: {
        document,
      },
      meta: {
        url: `shoots/${id}`,
      },
    });
  }

  render() {
    return (
      <Page>
        <Header />

        <main>
          <h1>Add a Shoot</h1>

          <FormSection handleSubmit={this.onSubmit} />
        </main>

        <Footer />
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(AddShoot);
