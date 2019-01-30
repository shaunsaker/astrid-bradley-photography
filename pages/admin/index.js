import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { categories } from '../../config';
import { sortArrayOfObjectsByKey } from '../../utils';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Select from '../../components/Select';
import ShootItem from '../../components/ShootItem';
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

    // Map categories to select options
    const selectOptions = categories.map((category) => {
      const { name, id } = category;

      return {
        name,
        value: id,
      };
    });

    // Filter shoots on category_id
    // Sort by date
    const shootsArray = sortArrayOfObjectsByKey(
      shoots.filter((shoot) => shoot.category_id === currentCategory.id),
      'date',
      true, // reverse order
    );

    return (
      <Page>
        <Header />

        <main>
          <div className="relative">
            <h1 style={{ marginBottom: 0 }}>Admin Dashboard</h1>

            <div
              className="row"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
              }}
            >
              <label>Select a category</label>

              <div className="spacer-hz" />

              <Select options={selectOptions} handleChange={this.onSelectCategory} />
            </div>
          </div>

          <div className="spacer-vt large" />

          {shootsArray.map((shoot) => {
            const { id } = shoot;

            return (
              <Fragment key={id}>
                <ShootItem shoot={shoot} />

                <div className="spacer-vt" />
              </Fragment>
            );
          })}

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
