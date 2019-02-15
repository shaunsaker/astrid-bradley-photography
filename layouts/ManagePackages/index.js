import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CONTROLS from './controls';
import { categories } from '../../config';
import { mapToSelectOptions, sortArrayOfObjectsByKey } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import SelectCategorySection from '../../components/SelectCategorySection';
import PackageItem from '../../components/PackageItem';
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
    packages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      }),
    ),
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
    let { packages } = this.props;

    // Map categories to select options
    const selectOptions = mapToSelectOptions(categories);

    // Filter by category
    packages = packages.filter((item) => item.category_id === currentCategory.id);

    // Sort by price (low to high)
    packages = sortArrayOfObjectsByKey(packages, 'price');

    return (
      <Layout title="Manage Packages">
        <SelectCategorySection options={selectOptions} handleChange={this.onSelectCategory} />

        <div className="spacer-vt large" />

        <section>
          {packages.map((item) => {
            const { id } = item;

            return <PackageItem key={id} packageItem={item} />;
          })}
        </section>

        <ControlPanel controls={CONTROLS} />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { packages } = state;

  return {
    packages,
  };
};

export default withAuth(connect(mapStateToProps)(Admin));
