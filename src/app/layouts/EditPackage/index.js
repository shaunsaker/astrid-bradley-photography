import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

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
    // connect
    packages: PropTypes.arrayOf(PropTypes.shape({})),

    // withRouter
    router: PropTypes.shape({ query: PropTypes.shape({ id: PropTypes.string }) }),

    // withProductFields
    productFields: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {};

  render() {
    const { packages, productFields, router } = this.props;
    const packageID = router.query.id;
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

export default withAuth(withRouter(withProductFields(connect(mapStateToProps)(EditPackage))));
