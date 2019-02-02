import React from 'react';
import PropTypes from 'prop-types';

import { categories } from '../../config';
import styles from './styles';

import Layout from '../../components/Layout';

export default class SortShoots extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);

    this.state = {
      currentCategory: null,
    };
  }

  static propTypes = {};

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

    // Map to select options

    return (
      <Layout title="Sort Shoots">
        <div>Select category section</div>
      </Layout>
    );
  }
}