import React from 'react';
import PropTypes from 'prop-types';

import { packageForm } from '../../config/forms';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';

import withAuth from '../../enhancers/withAuth';
import withGoBackOnSave from '../../enhancers/withGoBackOnSave';
import withProductFields from '../../enhancers/withProductFields';

const AddPackage = ({ productFields }) => {
  const formWithExtraFields = packageForm.concat(productFields);

  return (
    <Layout title="Add Package">
      <EditDocumentSection form={formWithExtraFields} collectionURL="packages" />
    </Layout>
  );
};

AddPackage.propTypes = {
  // withProductFields
  productFields: PropTypes.arrayOf(PropTypes.shape({})),
};
AddPackage.defaultProps = {};

export default withAuth(withGoBackOnSave(withProductFields(AddPackage)));
