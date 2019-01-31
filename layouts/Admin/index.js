import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CONTROLS from './controls';
import { categories } from '../../config';
import { sortArrayOfObjectsByKey } from '../../utils';
import styles from './styles';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Select from '../../components/Select';
import ShootItem from '../../components/ShootItem';
import ControlPanel from '../../components/ControlPanel';
import Footer from '../../components/Footer';

import withAuth from '../../wrappers/withAuth';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.signOut = this.signOut.bind(this);

    this.state = {
      currentCategory: categories[0],
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

  onSignOut() {
    this.signOut();
  }

  setCurrentCategory(currentCategory) {
    this.setState({
      currentCategory,
    });
  }

  signOut() {
    const { dispatch } = this.props;

    dispatch({
      type: 'signOut',
      meta: {
        nextAction: {
          type: 'SIGN_OUT_USER',
          // TODO: How to also display error message?
        },
      },
    });
  }

  render() {
    const { currentCategory } = this.state;
    const { shoots } = this.props;

    // Map categories to select options
    const selectOptions = categories.map((category) => {
      const { name, id } = category;

      return {
        name,
        value: id,
      };
    });

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
      <Page>
        <Header />

        <main>
          <div className="relative">
            <h1 className="heading">Admin Dashboard</h1>

            <div className="row category-container">
              <label>Select a category</label>

              <div className="spacer-hz" />

              <Select options={selectOptions} handleChange={this.onSelectCategory} />
            </div>
          </div>

          <div className="spacer-vt large" />

          {Object.keys(groupedShoots).map((year) => {
            const groupedShootsArray = groupedShoots[year];

            return (
              <section key={year}>
                <h2>{year}</h2>

                <div className="spacer-vt" />

                {groupedShootsArray.map((shoot) => {
                  const { id } = shoot;

                  return (
                    <Fragment key={id}>
                      <ShootItem shoot={shoot} />

                      <div className="spacer-vt" />
                    </Fragment>
                  );
                })}
              </section>
            );
          })}

          <ControlPanel
            controls={[
              ...CONTROLS,
              { iconName: 'lock', label: 'Sign Out', handleClick: this.signOut },
            ]}
          />
        </main>

        <Footer />

        <style jsx>{styles}</style>
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withAuth(connect(mapStateToProps)(Admin));
