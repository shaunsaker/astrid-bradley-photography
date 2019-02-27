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
    additionalProducts: PropTypes.arrayOf(PropTypes.shape({})),
    shootDate: PropTypes.string,
    clientDetails: PropTypes.shape({}),
    getProduct: PropTypes.func, // withGetProduct
  };

  static defaultProps = {};

  render() {
    const { packageDetails, additionalProducts, shootDate, clientDetails, getProduct } = this.props;
    const title = 'Quotation';
    const documentNumber = 1; // TODO:
    const documentDetails = {
      title,
      documentNumber,
    };
    const sections = getSections({
      documentDetails,
      packageDetails,
      additionalProducts,
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
    // TODO: Invoice ?
    // TODO: Save to db ?

    return (
      <section className="container flex">
        <div className="text-container flex">
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
        </div>

        <div className="spacer-vt large" />

        <HeadingText>Preview</HeadingText>

        <div className="spacer-vt" />

        <PDFViewer>{quotationComponent}</PDFViewer>

        <style jsx>{styles}</style>
      </section>
    );
  }
}

export default withGetProduct(DoneSection);
