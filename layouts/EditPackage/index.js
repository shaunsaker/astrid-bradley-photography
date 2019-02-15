import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { packageForm } from '../../config/forms';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';

import withAuth from '../../enhancers/withAuth';
import withProductFields from '../../enhancers/withProductFields';

export class EditPackage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    // Router
    packageID: PropTypes.string,

    // connect
    packages: PropTypes.arrayOf(PropTypes.shape({})),

    // withProductFields
    productFields: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {};

  render() {
    const { packages, packageID, productFields } = this.props;
    const packageDocument = packages.filter((item) => item.id === packageID)[0];
    const title = `Editing: ${packageDocument.name}`;
    const formWithExtraFields = packageForm.concat(productFields);

    return (
      <Layout title={title}>
        <EditDocumentSection
          form={formWithExtraFields}
          document={packageDocument}
          collectionURL="packages"
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { packages } = state;

  return {
    packages,
  };
};

export default withAuth(withProductFields(connect(mapStateToProps)(EditPackage)));
