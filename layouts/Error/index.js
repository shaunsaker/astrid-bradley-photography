import React from 'react';

import styles from './styles';

import Layout from '../../components/Layout';
import TitleText from '../../components/TitleText';
import ParagraphText from '../../components/ParagraphText';
import ContactButtonSection from '../../components/ContactButton';

const Error = () => {
  return (
    <Layout>
      <section>
        <TitleText>Sorry, we couldn&apos;t find that page.</TitleText>

        <ParagraphText>
          The page you&apos;re searching for doesn&apos;t exist. It has either been moved or the
          link is broken.
        </ParagraphText>
      </section>

      <ContactButtonSection />

      <style jsx>{styles}</style>
    </Layout>
  );
};

Error.propTypes = {};
Error.defaultProps = {};

export default Error;
