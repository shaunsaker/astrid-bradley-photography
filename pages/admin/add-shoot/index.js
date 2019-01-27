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
    const { title, category, date, location, file } = event.target;
    const { files } = file;
    const values = {
      title: title.value,
      category: category.value,
      date: date.value,
      location: location.value,
    };

    event.preventDefault();

    console.log(files);

    // TODO: Upload files (indicate status - progress, success, error - offer retry on error)
    // TODO: Create shoot document once the above process is complete
    // TODO: Show success state (maybe a link to the page?)
  }

  render() {
    /*
    1. Capturing
    2. Uploading files
    3. Saving shoot
*/

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
