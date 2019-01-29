import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import FormSection from '../../../components/admin/add-shoot/FormSection';
import LoadingSection from '../../../components/LoadingSection';
import SuccessSection from '../../../components/admin/add-shoot/SuccessSection';
import Footer from '../../../components/Footer';

import withAuth from '../../../wrappers/withAuth';

class AddShoot extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.setShootID = this.setShootID.bind(this);
    this.saveShoot = this.saveShoot.bind(this);

    this.state = {
      shootID: null,
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    shoots: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { shootID } = this.state;
    const { shoots } = this.props;
    const haveShoot = shoots.filter((shoot) => shoot.id === shootID).length;
    const didNotHaveShoot = !prevProps.shoots.filter((shoot) => shoot.id === shootID).length;

    // IF we just received the new shoot
    if (haveShoot && didNotHaveShoot) {
      this.setIsLoading(false);
    }
  }

  onSubmit(values) {
    const shoot = values;

    // Replace the date value with js time (in ms)
    const time = new Date(shoot.date).getTime();
    shoot.date = time;

    // Use the name as the id
    const id = shoot.name
      .split(' ')
      .join('-')
      .toLowerCase();

    this.setIsLoading(true);
    this.setShootID(id);
    this.saveShoot(id, shoot);
  }

  setIsLoading(isLoading) {
    this.setState({
      isLoading,
    });
  }

  setShootID(shootID) {
    this.setState({
      shootID,
    });
  }

  saveShoot(id, shoot) {
    const { dispatch } = this.props;
    const document = shoot;

    // Add a date created field with the current time
    document.date_created = Date.now();

    dispatch({
      type: 'addDocument',
      payload: {
        document,
      },
      meta: {
        url: `shoots/${id}`,
      },
    });
  }

  render() {
    const { isLoading, shootID } = this.state;
    const { shoots } = this.props;
    let title = 'Add a Shoot';

    // IF loading
    // THEN display the loading section
    const loadingComponent = isLoading && <LoadingSection />;
    let mainComponent = (
      <div className="relative">
        <FormSection handleSubmit={this.onSubmit} />

        {loadingComponent}
      </div>
    );

    // IF not loading and we have the shoot in props
    const hasLoaded = !isLoading && shoots.filter((shoot) => shoot.id === shootID).length;

    if (hasLoaded) {
      title = 'Shoot Added Successfully';
      mainComponent = <SuccessSection shootID={shootID} />;
    }

    return (
      <Page>
        <Header />

        <main>
          <h1>{title}</h1>

          {mainComponent}
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

export default withAuth(connect(mapStateToProps)(AddShoot));
