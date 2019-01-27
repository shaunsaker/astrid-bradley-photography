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

  static propTypes = {};

  static defaultProps = {};

  onSubmit(event) {
    const { title, category, date, location } = event.target;
    const values = {
      title: title.value,
      category: category.value,
      date: date.value,
      location: location.value,
    };

    event.preventDefault();

    // TODO: Save the shoot to the db
    // TODO: Show success state and Navigate to upload photos button
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
