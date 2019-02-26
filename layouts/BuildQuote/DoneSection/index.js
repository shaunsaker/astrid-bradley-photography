import React from 'react';
import PropTypes from 'prop-types';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import getSections from './getSections';
import { business } from '../../../config';
import styles from './styles';

import PaymentDocument from './PaymentDocument';

import HeadingText from '../../../components/HeadingText';
import ParagraphText from '../../../components/ParagraphText';
import Button from '../../../components/Button';
import withGetProduct from '../../../enhancers/withGetProduct';

class DoneSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    packageDetails: PropTypes.shape({}),
    shootDate: PropTypes.string,
    clientDetails: PropTypes.shape({}),
    getProduct: PropTypes.func, // withGetProduct
  };

  static defaultProps = {};

  render() {
    const { packageDetails, shootDate, clientDetails, getProduct } = this.props;
    const title = 'Quotation';
    const documentNumber = 1; // TODO:
    const documentDetails = {
      title,
      documentNumber,
    };
    const sections = getSections({
      documentDetails,
      packageDetails,
      shootDate,
      clientDetails,
      getProduct,
    });
    const quotationComponent = (
      <PaymentDocument
        logoImageSrc="/static/images/logo.png"
        title={title}
        author={business.name}
        sections={sections}
      />
    );

    // TODO: Message

    return (
      <div className="container">
        <section className="text-container flex">
          <ParagraphText>
            Tada! Some message about how you need to pay before securing your booking.
          </ParagraphText>

          <div className="spacer-vt" />

          <PDFDownloadLink
            document={quotationComponent}
            fileName="somename.pdf"
            className="download-anchor"
            style={{ textDecoration: 'none' }}
          >
            <Button text="Download Quote" />
          </PDFDownloadLink>
        </section>

        <HeadingText>Preview</HeadingText>

        <div className="spacer-vt" />

        <PDFViewer>{quotationComponent}</PDFViewer>

        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default withGetProduct(DoneSection);
