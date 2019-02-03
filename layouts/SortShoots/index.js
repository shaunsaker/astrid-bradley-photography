import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../config';
import { mapToSelectOptions } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import SelectCategorySection from '../../components/SelectCategorySection';
import ShootItem from '../../components/ShootItem';

import withAuth from '../../wrappers/withAuth';

export class SortShoots extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.renderShootItem = this.renderShootItem.bind(this);
    this.renderItemPlaceholder = this.renderItemPlaceholder.bind(this);

    const { shoots } = props;

    this.state = {
      currentCategory: categories[0],
      shoots,
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

  onDrag(sourceIndex, targetIndex) {
    // console.log(sourceIndex, targetIndex);
  }

  setCurrentCategory(currentCategory) {
    this.setState({
      currentCategory,
    });
  }

  renderShootItem(shoot) {
    return (
      <Fragment>
        <ShootItem shoot={shoot} />

        <div className="spacer-vt" />
      </Fragment>
    );
  }

  renderItemPlaceholder(height) {
    return (
      <Fragment>
        <div className="item-placeholder-container" style={{ height }} />

        <div className="spacer-vt" />

        <style jsx>{styles}</style>
      </Fragment>
    );
  }

  render() {
    const { currentCategory } = this.state;
    const { shoots } = this.state;

    // Map categories to select options
    const selectOptions = mapToSelectOptions(categories);

    // Filter shoots on category_id
    const shootsArray = shoots.filter((shoot) => shoot.category_id === currentCategory.id);

    return (
      <Layout title="Sort Shoots">
        <SelectCategorySection options={selectOptions} handleChange={this.onSelectCategory} />

        <div className="spacer-vt large" />

        <style jsx>{styles}</style>
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
