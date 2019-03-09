import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { productForm } from '../../config/forms';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';

import withAuth from '../../enhancers/withAuth';

export class EditProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    // connect
    products: PropTypes.arrayOf(PropTypes.shape({})),

    // withRouter
    router: PropTypes.shape({ query: PropTypes.shape({ id: PropTypes.string }) }),
  };

  static defaultProps = {};

  render() {
    const { products, router } = this.props;
    const productID = router.query.id;
    const product = products.filter((item) => item.id === productID)[0];
    const { name } = product;
    const title = `Editing: ${name}`;

    return (
      <Layout title={title}>
        <EditDocumentSection form={productForm} document={product} collectionURL="products" />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default withAuth(withRouter(connect(mapStateToProps)(EditProduct)));
