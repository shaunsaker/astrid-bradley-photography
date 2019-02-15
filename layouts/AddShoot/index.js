import React from 'react';

import { shootForm } from '../../config/forms';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';

import withAuth from '../../enhancers/withAuth';
import withGoBackOnSave from '../../enhancers/withGoBackOnSave';

const AddShoot = () => {
  return (
    <Layout title="Add Shoot">
      <EditDocumentSection form={shootForm} collectionURL="shoots" />
    </Layout>
  );
};

AddShoot.propTypes = {};
AddShoot.defaultProps = {};

export default withAuth(withGoBackOnSave(AddShoot));
