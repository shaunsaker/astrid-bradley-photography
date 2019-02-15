import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    shoots: PropTypes.arrayOf(PropTypes.shape({})),
    shootID: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { shoots, shootID } = this.props;
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

export default withAuth(connect(mapStateToProps)(EditShoot));
