import { getPrettyDate } from '../../../../utils';
import { business, categories } from '../../../../config';

// FIXME: Could generate these sections in a more modular way
const getSections = ({
  documentDetails,
  packageDetails,
  additionalProducts,
  shootDate,
  clientDetails,
  getProduct,
}) => {
  const { title, documentNumber } = documentDetails;
  const prettyShootDate = getPrettyDate(shootDate);
  const prettyDate = getPrettyDate(Date.now());
  const categoryName = categories.filter((item) => item.id === packageDetails.category_id)[0].name;
  const totalPrice = additionalProducts
    .map((item) => {
      const product = getProduct(item);
      const cost = product.price * product.qty;

      return cost;
    })
    .reduce((total, cost) => {
      return total + cost;
    }, packageDetails.price);

  const clientDetailsSection = {
    title: 'Client Details',
    key: 'client-details-section',
    rows: [
      {
        key: 'name-row',
        columns: [
          {
            key: 'name-label',
            value: 'Name',
            flex: 1,
          },
          {
            key: 'name-value',
            value: clientDetails.name,
            flex: 1,
          },
        ],
      },
      {
        key: 'email-row',
        columns: [
          {
            key: 'email-label',
            value: 'Email',
            flex: 1,
          },
          {
            key: 'email-value',
            value: clientDetails.email,
            flex: 1,
          },
        ],
      },
      {
        key: 'shoot-date-row',
        columns: [
          {
            key: 'shoot-date-label',
            value: 'Shoot Date',
            flex: 1,
          },
          {
            key: 'shoot-date-value',
            value: prettyShootDate,
            flex: 1,
          },
        ],
      },
      {
        key: 'shoot-location-row',
        columns: [
          {
            key: 'shoot-location-label',
            value: 'Shoot Location',
            flex: 1,
          },
          {
            key: 'shoot-location-value',
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
            key: 'number-label',
            value: 'Number',
            flex: 1,
          },
          {
            key: 'number-value',
            value: documentNumber,
            flex: 'auto',
          },
        ],
      },
      {
        key: 'date-row',
        columns: [
          {
            key: 'date-label',
            value: 'Date',
            flex: 1,
          },
          {
            key: 'date-value',
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
            key: 'header-description',
            value: 'Description',
            flex: 5,
          },
          {
            key: 'header-quantity',
            value: 'Quantity',
            flex: 1,
          },
          {
            key: 'header-total',
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
            key: 'package-description',
            value: `${packageDetails.name} ${categoryName} package`,
            flex: 5,
          },
          {
            key: 'package-qty',
            value: 1,
            flex: 1,
          },
          {
            key: 'package-total',
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
            key: 'time-description',
            value: 'Time (hrs)',
            flex: 5,
          },
          {
            key: 'time-qty',
            value: packageDetails.time,
            flex: 1,
          },
          {
            key: 'time-total',
            flex: 'auto',
            style: { width: 60, textAlign: 'right' },
          },
        ],
      },
      {
        key: 'photos-row',
        columns: [
          {
            key: 'photos-description',
            value: 'Photos',
            flex: 5,
          },
          {
            key: 'photos-qty',
            value: packageDetails.photos,
            flex: 1,
          },
          {
            key: 'photos-total',
            flex: 'auto',
            style: { width: 60, textAlign: 'right' },
          },
        ],
      },
      {
        key: 'travel-row',
        columns: [
          {
            key: 'travel-description',
            value: 'Travel (km)',
            flex: 5,
          },
          {
            key: 'travel-qty',
            value: packageDetails.distance * 2,
            flex: 1,
          },
          {
            key: 'travel-total',
            flex: 'auto',
            style: { width: 60, textAlign: 'right' },
          },
        ],
      },
      ...packageDetails.products_included.map((item) => {
        const product = getProduct(item);

        return {
          key: product.id,
          columns: [
            {
              key: `${product.id}-description`,
              value: product.name,
              flex: 5,
            },
            {
              key: `${product.id}-qty`,
              value: product.qty,
              flex: 1,
            },
            {
              key: `${product.id}-total`,
              flex: 'auto',
              style: { width: 60, textAlign: 'right' },
            },
          ],
        };
      }),
    ],
  };

  const additionalProductsSection = {
    key: 'additional-products-section',
    rows: [
      {
        key: 'additional-row',
        smallText: true,
        columns: [
          {
            key: 'additional-label',
            value: 'Additional',
          },
        ],
      },
      ...additionalProducts.map((item) => {
        const product = getProduct(item);

        return {
          key: `${product.id} - additional`,
          columns: [
            {
              key: `${product.id}-description-additional`,
              value: `${product.name} (additional)`,
              flex: 5,
            },
            {
              key: `${product.id}-qty-additional`,
              value: product.qty,
              flex: 1,
            },
            {
              key: `${product.id}-total-additional`,
              value: `R ${product.qty * product.price}`,
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
            key: 'total-spacer',
            flex: 5,
          },
          {
            key: 'total-label',
            value: 'Total',
            flex: 1,
          },
          {
            key: 'total-value',
            value: `R ${totalPrice}`,
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
            key: `${1}-label`,
            value: '1. ',
            flex: 1,
          },
          {
            key: `${1}-value`,
            value: '25% retainer is required to secure booking.',
            flex: 9,
          },
        ],
      },
      {
        key: 'row-2',
        columns: [
          {
            key: `${2}-label`,
            value: '2. ',
            flex: 1,
          },
          {
            key: `${2}-value`,
            value: '25% required 6 months prior to wedding.',
            flex: 9,
          },
        ],
      },
      {
        key: 'row-3',
        columns: [
          {
            key: `${3}-label`,
            value: '3. ',
            flex: 1,
          },
          {
            key: `${3}-value`,
            value: '50% due 1 week prior to wedding.',
            flex: 9,
          },
        ],
      },
    ],
  };

  const bankingDetailsSection = {
    title: 'Banking Details',
    key: 'banking-details-section',
    flex: 1,
    rows: [
      {
        key: 'account-number-row',
        columns: [
          {
            key: 'number-label',
            value: 'Account Number',
            flex: 1,
          },
          {
            key: 'number-value',
            value: business.bankingDetails.accountNumber,
            flex: 1,
          },
        ],
      },
      {
        key: 'bank-row',
        columns: [
          {
            key: 'bank-label',
            value: 'Bank',
            flex: 1,
          },
          {
            key: 'bank-value',
            value: business.bankingDetails.bank,
            flex: 1,
          },
        ],
      },
      {
        key: 'branch-code-row',
        columns: [
          {
            key: 'branch-label',
            value: 'Branch Code',
            flex: 1,
          },
          {
            key: 'branch-value',
            value: business.bankingDetails.branchCode,
            flex: 1,
          },
        ],
      },
      {
        key: 'reference-row',
        columns: [
          {
            key: 'ref-label',
            value: 'Reference',
            flex: 1,
          },
          {
            key: 'ref-value',
            value: clientDetails.name,
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
            key: 1,
            value: business.contactDetails.email,
            flex: 'auto',
          },
          {
            key: 2,
            value: business.contactDetails.tel,
            flex: 'auto',
          },
          {
            key: 3,
            value: business.contactDetails.website,
            flex: 'auto',
          },
          {
            key: 4,
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
      key: 'packageDetails',
      columns: [packageDetailsSection],
    },
    {
      key: 'total',
      flex: 1,
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

  // IF there are additional products
  // THEN add the additional products section
  if (additionalProducts.length) {
    sections.splice(2, 0, {
      key: 'additionalProducts',
      columns: [additionalProductsSection],
    });
  }

  return sections;
};

export default getSections;
