import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { shootForm } from '../../config/forms';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../enhancers/withAuth';

export class EditShoot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    // connect
    shoots: PropTypes.arrayOf(PropTypes.shape({})),

    // withRouter
    router: PropTypes.shape({ query: PropTypes.shape({ id: PropTypes.string }) }),
  };

  static defaultProps = {};

  render() {
    const { shoots, router } = this.props;
    const shootID = router.query.id;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const { name, id } = shoot;
    const title = `Editing: ${name}`;

    // Create the controls (needs to be dynamic)
    const controls = [
      {
        iconName: 'photo',
        label: 'Manage Photos',
        link: {
          href: `/admin/shoots/edit/photos?id=${id}`,
        },
      },
    ];

    return (
      <Layout title={title}>
        <EditDocumentSection form={shootForm} document={shoot} collectionURL="shoots" />

        <ControlPanel controls={controls} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withAuth(withRouter(connect(mapStateToProps)(EditShoot)));
