import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../config';
import { mapToSelectOptions, reorderArrayItems, sortArrayOfObjectsByKey } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import SelectCategorySection from '../../components/SelectCategorySection';
import DraggableList from '../../components/DraggableList';
import ShootItem from '../../components/ShootItem';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../enhancers/withAuth';

export class SortShoots extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onSave = this.onSave.bind(this);
    this.getShootsState = this.getShootsState.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.setShoots = this.setShoots.bind(this);
    this.getShootsWithOrder = this.getShootsWithOrder.bind(this);
    this.saveBatchUpdate = this.saveBatchUpdate.bind(this);
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

  onSave() {
    const newShoots = this.getShootsWithOrder();

    this.saveBatchUpdate(newShoots);
  }

  getShootsState() {
    const { shoots } = this.props;
    const separatedShoots = {};

    // Separate the shoots into their categories
    categories.forEach((category) => {
      const { id } = category;

      // Filter on category ID
      // Sort by order (if present)
      const relevantShoots = sortArrayOfObjectsByKey(
        shoots.filter((shoot) => shoot.category_id === id),
        'order',
      );

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

  getShootsWithOrder() {
    const { shoots } = this.state;
    const newShoots = [];

    // Map over the shoots keys (categories)
    // Add an order field to the shoot (based on index)
    // Push the shoot to newShoots
    Object.keys(shoots).forEach((categoryID) => {
      const relevantShoots = shoots[categoryID];

      relevantShoots.forEach((shoot, index) => {
        const order = index + 1;
        const now = Date.now();
        const newShoot = {
          ...shoot,
          order,
          date_modified: now,
        };

        newShoots.push(newShoot);
      });
    });

    return newShoots;
  }

  saveBatchUpdate(shoots) {
    const { dispatch } = this.props;

    dispatch({
      type: 'batchUpdate',
      payload: {
        documents: shoots,
      },
      meta: {
        url: 'shoots',
        nextAction: {
          type: 'SET_SYSTEM_MESSAGE',
          payload: {
            message: 'Shoot order saved successfully.',
            isSuccess: true,
          },
        },
      },
    });
  }

  renderItem(shoot, isDragging) {
    return (
      <Fragment>
        <ShootItem shoot={shoot} secondary={isDragging} admin />

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

    const controls = [
      {
        iconName: 'save',
        label: 'Save Order',
        handleClick: this.onSave,
      },
    ];

    return (
      <Layout title="Sort Shoots">
        <section>
          <SelectCategorySection options={selectOptions} handleChange={this.onSelectCategory} />

          <div className="spacer-vt large" />

          <DraggableList
            items={relevantShoots}
            renderItem={this.renderItem}
            handleDragEnd={this.onDragEnd}
          />
        </section>

        <ControlPanel controls={controls} />

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
