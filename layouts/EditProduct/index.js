import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';

import withAuth from '../../enhancers/withAuth';

export class EditProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({})),
    productID: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { products, productID } = this.props;
    const product = products.filter((item) => item.id === productID)[0];
    const { name } = product;
    const title = `Editing: ${name}`;

    return (
      <Layout title={title}>
        <EditDocumentSection formName="productForm" document={product} collectionURL="products" />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default withAuth(connect(mapStateToProps)(EditProduct));
