import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  static getInitialProps = async () => {};

  static propTypes = {};

  static defaultProps = {};

  onSubmit() {}

  render() {
    return (
      <Page>
        <Header />

        <main>
          <h1>Upload Photos</h1>
        </main>

        <Footer />
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(UploadPhotos);
