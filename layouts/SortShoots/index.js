import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../config';
import { mapToSelectOptions, reorderArrayItems } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import SelectCategorySection from '../../components/SelectCategorySection';
import DraggableList from '../../components/DraggableList';
import ShootItem from '../../components/ShootItem';

import withAuth from '../../wrappers/withAuth';

export class SortShoots extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getShootsState = this.getShootsState.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.setShoots = this.setShoots.bind(this);
    this.renderItem = this.renderItem.bind(this);

    this.state = {
      currentCategory: categories[0],
      shoots: this.getShootsState(),
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

  onDragEnd(result) {
    const { currentCategory, shoots } = this.state;
    const { source, destination } = result;

    // Dropped inside the list
    if (result.destination) {
      const relevantShoots = shoots[currentCategory.id];
      const reorderedShoots = reorderArrayItems(relevantShoots, source.index, destination.index);
      shoots[currentCategory.id] = reorderedShoots;

      this.setShoots(shoots);
    }
  }

  getShootsState() {
    const { shoots } = this.props;
    const separatedShoots = {};

    // Separate the shoots into their categories
    categories.forEach((category) => {
      const { id } = category;
      const relevantShoots = shoots.filter((shoot) => shoot.category_id === id);

      separatedShoots[id] = relevantShoots;
    });

    return separatedShoots;
  }

  setCurrentCategory(currentCategory) {
    this.setState({
      currentCategory,
    });
  }

  setShoots(shoots) {
    this.setState({
      shoots,
    });
  }

  renderItem(shoot, isDragging) {
    return (
      <Fragment>
        <ShootItem shoot={shoot} secondary={isDragging} disabled />

        <div className="spacer-vt" />
      </Fragment>
    );
  }

  render() {
    const { currentCategory } = this.state;
    const { shoots } = this.state;

    // Map categories to select options
    const selectOptions = mapToSelectOptions(categories);

    // Get the relevant shoots from state
    const relevantShoots = shoots[currentCategory.id];

    return (
      <Layout title="Sort Shoots">
        <SelectCategorySection options={selectOptions} handleChange={this.onSelectCategory} />

        <div className="spacer-vt large" />

        <DraggableList
          items={relevantShoots}
          renderItem={this.renderItem}
          handleDragEnd={this.onDragEnd}
        />

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
