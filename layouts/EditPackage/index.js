import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { packageForm } from '../../config/forms';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';

import withAuth from '../../enhancers/withAuth';

export class EditPackage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    packages: PropTypes.arrayOf(PropTypes.shape({})),
    packageID: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { packages, packageID } = this.props;
    const packageDocument = packages.filter((item) => item.id === packageID)[0];
    const { name } = packageDocument;
    const title = `Editing: ${name}`;

    return (
      <Layout title={title}>
        <EditDocumentSection
          form={packageForm}
          document={packageDocument}
          collectionURL="packages"
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    packages: state.packages,
  };
};

export default withAuth(connect(mapStateToProps)(EditPackage));
