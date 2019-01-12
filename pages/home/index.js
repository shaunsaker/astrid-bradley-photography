import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider';
import Springboard from '../../components/Springboard';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <Page>
      <Header />

      <div>
        <ImageSlider />

        <div>
          <h1>Portfolio</h1>

          <div className="row">
            <Springboard
              image={{ src: '/static/images/pages/home/springboard-weddings.jpg', alt: 'Weddings' }}
              text="Weddings"
              href="weddings"
            />

            <div className="margin-hz" />

            <Springboard
              image={{
                src: '/static/images/pages/home/springboard-lifestyle.jpg',
                alt: 'Weddings',
              }}
              text="Lifestyle"
              href="lifestyle"
            />
          </div>
        </div>
      </div>

      <Footer />
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
