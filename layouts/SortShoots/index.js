import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../config';
import { mapToSelectOptions } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import SelectCategorySection from '../../components/SelectCategorySection';

import withAuth from '../../wrappers/withAuth';

export class SortShoots extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);

    this.state = {
      currentCategory: null,
    };
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape({ category_id: PropTypes.string })),
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onSelectCategory(event) {
    const { value } = event.target;
    const category = categories.filter((item) => item.id === value)[0];

    this.setCurrentCategory(category);
  }

  setCurrentCategory(currentCategory) {
    this.setState({
      currentCategory,
    });
  }

  render() {
    const { currentCategory } = this.state;
    const { shoots } = this.props;

    // Map categories to select options
    const selectOptions = mapToSelectOptions(categories);

    return (
      <Layout title="Sort Shoots">
        <SelectCategorySection options={selectOptions} handleChange={this.onSelectCategory} />

        <div className="spacer-vt large" />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withAuth(connect(mapStateToProps)(SortShoots));
