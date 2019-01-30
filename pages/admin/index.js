import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../config';

import Page from '../../components/Page';
import Header from '../../components/Header';
import SelectCategorySection from '../../components/admin/SelectCategorySection';
import ControlPanel from '../../components/admin/ControlPanel';
import IconButton from '../../components/IconButton';
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

  static getInitialProps = async () => {};

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
    const shootsArray = shoots.filter((shoot) => shoot.category_id === currentCategory.id);
    console.log(shootsArray);

    return (
      <Page>
        <Header />

        <main>
          <h1>Admin Dashboard</h1>

          <SelectCategorySection categories={categories} handleChange={this.onSelectCategory} />

          <span className="spacer-vt" />

          <ControlPanel>
            <IconButton iconName="lock" label="Sign Out" handleClick={this.onSignOut} />
          </ControlPanel>
        </main>

        <Footer />
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
