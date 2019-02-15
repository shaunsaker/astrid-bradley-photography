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
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      }),
    ),
    packageID: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { packages, packageID, products } = this.props;
    const packageDocument = packages.filter((item) => item.id === packageID)[0];
    const title = `Editing: ${packageDocument.name}`;
    const extraFields = [
      {
        type: 'group',
        name: 'products-included',
        label: 'Products included:',
        fields: products.map((product) => {
          const { id, name } = product;
          const label = `${name} (qty)`;

          return {
            type: 'number',
            name: id,
            label,
          };
        }),
      },
      {
        type: 'group',
        name: 'products-available',
        label: 'Products available as add-ons:',
        fields: products.map((product) => {
          const { id, name } = product;

          return {
            type: 'checkbox',
            name: id,
            label: name,
          };
        }),
      },
    ];

    const formWithExtraFields = packageForm.concat(extraFields);

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
  const { packages, products } = state;

  return {
    packages,
    products,
  };
};

export default withAuth(connect(mapStateToProps)(EditPackage));
