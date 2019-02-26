import React from 'react';
import PropTypes from 'prop-types';
import { Page, View, Image, Text, Document } from '@react-pdf/renderer';

import styles from './styles';

class PaymentDocument extends React.Component {
  constructor(props) {
    super(props);

    this.renderSection = this.renderSection.bind(this);

    this.state = {};
  }

  renderSection({ title, rows }) {
    const titleComponent = title && <Text style={styles.headingText}>{title}</Text>;

    return (
      <View style={styles.column}>
        {titleComponent}

        {rows &&
          rows.map((row) => {
            return (
              <View key={row.key} style={styles.row}>
                {row.columns.map((column) => {
                  return (
                    <View
                      key={column.value}
                      style={[
                        styles.column,
                        {
                          flex: column.flex || 1,
                        },
                        column.style,
                      ]}
                    >
                      <Text style={[styles.paragraphText, row.smallText && styles.smallText]}>
                        {column.value}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
      </View>
    );
  }

  render() {
    const { logoImageSrc, title, author, sections } = this.props;

    return (
      <Document title={title} author={author}>
        <Page size="A4" style={styles.container}>
          <View style={styles.imageContainer}>
            <Image src={logoImageSrc} style={styles.image} />
          </View>

          <View style={styles.section}>
            <Text style={styles.titleText}>{title}</Text>
          </View>

          {sections.map((section) => {
            const titleComponent = section.title && (
              <Text style={styles.headingText}>{section.title}</Text>
            );

            return (
              <View key={section.key} style={[styles.section, { flex: section.flex || null }]}>
                {titleComponent}

                <View style={styles.row}>
                  {section.columns &&
                    section.columns.map((column) => {
                      return (
                        <View key={column.key} style={[styles.column, { flex: column.flex || 1 }]}>
                          {this.renderSection(column)}
                        </View>
                      );
                    })}
                </View>
              </View>
            );
          })}
        </Page>
      </Document>
    );
  }
}

const flexPropTypes = PropTypes.oneOfType([PropTypes.string, PropTypes.number]); // flex values for label and value

PaymentDocument.propTypes = {
  logoImageSrc: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      flex: flexPropTypes,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string,
          title: PropTypes.string,
          flex: flexPropTypes,
          rows: PropTypes.arrayOf(
            PropTypes.shape({
              key: PropTypes.string,
              columns: PropTypes.arrayOf(
                PropTypes.shape({
                  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                  flex: flexPropTypes,
                  style: PropTypes.shape({}),
                }),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
};

export default PaymentDocument;
