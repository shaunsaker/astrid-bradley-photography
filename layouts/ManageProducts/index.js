import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CONTROLS from './controls';
import styles from './styles';

import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../enhancers/withAuth';

class ManageProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {};

  render() {
    const { products } = this.props;

    return (
      <Layout title="Manage Products">
        <section>
          {products.map((item) => {
            const { id } = item;

            return (
              <ProductItem
                key={id}
                product={item}
                action={{
                  nextLink: {
                    href: `/admin/products/edit?id=${id}`,
                  },
                }}
              />
            );
          })}
        </section>

        <ControlPanel controls={CONTROLS} />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { products } = state;

  return {
    products,
  };
};

export default withAuth(connect(mapStateToProps)(ManageProducts));
