import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CONTROLS from './controls';
import { categories } from '../../config';
import { mapToSelectOptions, sortArrayOfObjectsByKey } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import SelectCategorySection from '../../components/SelectCategorySection';
import HeadingText from '../../components/HeadingText';
import ShootItem from '../../components/ShootItem';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../enhancers/withAuth';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);

    this.state = {
      currentCategory: categories[0],
    };
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape({ category_id: PropTypes.string })),
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

    // Filter shoots on category_id
    // Sort by wedding date
    const shootsArray = sortArrayOfObjectsByKey(
      shoots.filter((shoot) => shoot.category_id === currentCategory.id),
      'date',
      true, // reverse order
    );

    // Group shoots by year
    const groupedShoots = {};

    shootsArray.forEach((shoot) => {
      const { date } = shoot;
      const dateA = new Date(date);
      const year = dateA.getFullYear();

      // IF the year is not a key on the groupedShoots object
      if (!groupedShoots[year]) {
        groupedShoots[year] = [];
      }

      // Add the shoot to that year group
      groupedShoots[year].push(shoot);
    });

    return (
      <Layout title="Manage Shoots">
        <SelectCategorySection options={selectOptions} handleChange={this.onSelectCategory} />

        <div className="spacer-vt large" />

        {Object.keys(groupedShoots).map((year) => {
          const groupedShootsArray = groupedShoots[year];

          return (
            <section key={year}>
              <HeadingText>{year}</HeadingText>

              <div className="spacer-vt" />

              {groupedShootsArray.map((shoot) => {
                const { id } = shoot;

                return (
                  <Fragment key={id}>
                    <ShootItem shoot={shoot} admin />

                    <div className="spacer-vt" />
                  </Fragment>
                );
              })}
            </section>
          );
        })}

        <ControlPanel controls={CONTROLS} />

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

export default withAuth(connect(mapStateToProps)(Admin));
