import React from 'react';
import PropTypes from 'prop-types';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import { getPrettyDate } from '../../../utils';
import { business, categories } from '../../../config';
import styles from './styles';

import PaymentDocument from './PaymentDocument';

export default class DoneSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    packageDetails: PropTypes.shape({}),
    shootDate: PropTypes.string,
    clientDetails: PropTypes.shape({}),
  };

  static defaultProps = {};

  render() {
    const { packageDetails, shootDate, clientDetails } = this.props;
    const title = 'Quotation';
    const prettyShootDate = getPrettyDate(shootDate);
    const prettyDate = getPrettyDate(Date.now());
    const documentNumber = 1; // TODO:
    const categoryName = categories.filter((item) => item.id === packageDetails.category_id)[0]
      .name;

    // TODO: Move all of this to local function
    const clientDetailsSection = {
      title: 'Client Details',
      key: 'client-details-section',
      rows: [
        {
          key: 'name-row',
          columns: [
            {
              value: 'Name',
              flex: 1,
            },
            {
              value: clientDetails.name,
              flex: 1,
            },
          ],
        },
        {
          key: 'email-row',
          columns: [
            {
              value: 'Email',
              flex: 1,
            },
            {
              value: clientDetails.email,
              flex: 1,
            },
          ],
        },
        {
          key: 'shoot-date-row',
          columns: [
            {
              value: 'Shoot Date',
              flex: 1,
            },
            {
              value: prettyShootDate,
              flex: 1,
            },
          ],
        },
        {
          key: 'shoot-location-row',
          columns: [
            {
              value: 'Shoot Location',
              flex: 1,
            },
            {
              value: clientDetails.venue || 'TBC',
              flex: 1,
            },
          ],
        },
      ],
    };

    const documentDetailsSection = {
      title: `${title} Details`,
      key: 'document-details-section',
      rows: [
        {
          key: 'number-row',
          columns: [
            {
              value: 'Number',
              flex: 1,
            },
            {
              value: documentNumber,
              flex: 'auto',
            },
          ],
        },
        {
          key: 'date-row',
          columns: [
            {
              value: 'Date',
              flex: 1,
            },
            {
              value: prettyDate,
              flex: 'auto',
            },
          ],
        },
      ],
    };

    const packageDetailsSection = {
      title: 'Package Details',
      key: 'package-details-section',
      rows: [
        {
          key: 'header-row',
          smallText: true,
          columns: [
            {
              value: 'Description',
              flex: 5,
            },
            {
              value: 'Quantity',
              flex: 1,
            },
            {
              value: 'Total',
              flex: 'auto',
              style: { width: 60, textAlign: 'right' },
            },
          ],
        },
        {
          key: 'package-row',
          columns: [
            {
              value: `${packageDetails.name} ${categoryName} package`,
              flex: 5,
            },
            {
              value: 1,
              flex: 1,
            },
            {
              value: `R ${packageDetails.price}`,
              flex: 'auto',
              style: { width: 60, textAlign: 'right' },
            },
          ],
        },
        {
          key: 'time-row',
          columns: [
            {
              value: 'Time (hrs)',
              flex: 5,
            },
            {
              value: packageDetails.time,
              flex: 1,
            },
            {
              flex: 'auto',
              style: { width: 60, textAlign: 'right' },
            },
          ],
        },
        {
          key: 'photos-row',
          columns: [
            {
              value: 'Photos',
              flex: 5,
            },
            {
              value: packageDetails.photos,
              flex: 1,
            },
            {
              flex: 'auto',
              style: { width: 60, textAlign: 'right' },
            },
          ],
        },
        {
          key: 'travel-row',
          columns: [
            {
              value: 'Travel (km)',
              flex: 5,
            },
            {
              value: packageDetails.distance * 2,
              flex: 1,
            },
            {
              flex: 'auto',
              style: { width: 60, textAlign: 'right' },
            },
          ],
        },
        ...packageDetails.products_included.map((item) => {
          // TODO: Get product name util
          const id = Object.keys(item)[0];
          const qty = item[id];

          return {
            key: id,
            columns: [
              {
                value: id,
                flex: 5,
              },
              {
                value: qty,
                flex: 1,
              },
              {
                flex: 'auto',
                style: { width: 60, textAlign: 'right' },
              },
            ],
          };
        }),
      ],
    };

    const totalSection = {
      key: 'total-section',
      rows: [
        {
          key: 'total-row',
          columns: [
            {
              flex: 5,
            },
            {
              value: 'Total',
              flex: 1,
            },
            {
              value: `R ${packageDetails.price}`,
              flex: 'auto',
              style: { width: 60, textAlign: 'right' },
            },
          ],
        },
      ],
    };

    const termsDetailsSection = {
      title: 'Terms',
      key: 'terms-section',
      rows: [
        {
          key: 'row-1',
          columns: [
            {
              value: '1. ',
              flex: 1,
            },
            {
              value: '25% retainer is required to secure booking.',
              flex: 9,
            },
          ],
        },
        {
          key: 'row-2',
          columns: [
            {
              value: '2. ',
              flex: 1,
            },
            {
              value: '25% required 6 months prior to wedding.',
              flex: 9,
            },
          ],
        },
        {
          key: 'row-3',
          columns: [
            {
              value: '3. ',
              flex: 1,
            },
            {
              value: '50% due 1 week prior to wedding.',
              flex: 9,
            },
          ],
        },
      ],
    };

    // TODO:
    const bankingDetailsSection = {
      title: 'Banking Details',
      key: 'banking-details-section',
      flex: 1,
      rows: [
        {
          key: 'account-number-row',
          columns: [
            {
              value: 'Account Number',
              flex: 1,
            },
            {
              value: '1234567890',
              flex: 1,
            },
          ],
        },
        {
          key: 'bank-row',
          columns: [
            {
              value: 'Bank',
              flex: 1,
            },
            {
              value: 'FNB',
              flex: 1,
            },
          ],
        },
        {
          key: 'branch-code-row',
          columns: [
            {
              value: 'Branch Code',
              flex: 1,
            },
            {
              value: '12345',
              flex: 1,
            },
          ],
        },
        {
          key: 'reference-row',
          columns: [
            {
              value: 'Reference',
              flex: 1,
            },
            {
              value: 'XXXXX',
              flex: 1,
            },
          ],
        },
      ],
    };

    const contactDetailsSection = {
      key: 'contact-details-section',
      rows: [
        {
          key: 'contact-row',
          columns: [
            {
              value: business.contactDetails.email,
              flex: 'auto',
            },
            {
              value: business.contactDetails.tel,
              flex: 'auto',
            },
            {
              value: business.contactDetails.website,
              flex: 'auto',
            },
            {
              value: business.contactDetails.address,
              flex: 'auto',
            },
          ],
        },
      ],
    };

    const sections = [
      {
        key: 'client',
        columns: [clientDetailsSection, { key: 'spacer', flex: 0.1 }, documentDetailsSection],
      },
      {
        key: 'spacer',
        flex: 1,
        columns: [packageDetailsSection],
      },
      {
        key: 'total',
        columns: [totalSection],
      },
      {
        key: 'banking',
        columns: [bankingDetailsSection, { key: 'spacer', flex: 1 }],
      },
      {
        key: 'terms',
        columns: [termsDetailsSection],
      },
      { key: 'contact', columns: [contactDetailsSection] },
    ];

    return (
      <div className="container">
        {/* <PDFDownloadLink document={<PaymentDocument />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}

        <PDFViewer>
          <PaymentDocument
            logoImageSrc="/static/images/logo.png"
            title={title}
            author={business.name}
            sections={sections}
          />
        </PDFViewer>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
