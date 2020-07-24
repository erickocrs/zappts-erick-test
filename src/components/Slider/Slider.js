import React from 'react';
import './Slider.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sliderImgMini from '../../assets/images/slider-image-mini.png';
import sliderImg from '../../assets/images/slider-image.png';

const Slider = () => {
  return (
      <div className="box-slider">
        <div className="slider">
          <Carousel
            className="carousel"
            useKeyboardArrows={true}
            infiniteLoop={true}
            emulateTouch={true}
            swipeScrollTolerance={-10}
            showArrows={false}
            showThumbs={false}
            showStatus={false}>
              <div key="slide1">
                <picture>
                  <source media="(max-width:1400px)" srcset={sliderImgMini} />
                  <img src={sliderImg} alt="Slider"/>
                </picture>
                <h2>Marcenas mattis egestas</h2>
                <h3>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</h3>
              </div>
              <div key="slide2">                
                <picture>
                  <source media="(max-width:1400px)" srcset={sliderImgMini} />
                  <img src={sliderImg} alt="Slider"/>
                </picture>
                <h2>Marcenas mattis egestas</h2>
                <h3>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</h3>
              </div>
              <div key="slide3">
                <picture>
                  <source media="(max-width:1400px)" srcset={sliderImgMini} />
                  <img src={sliderImg} alt="Slider"/>
                </picture>
                <h2>Marcenas mattis egestas</h2>
                <h3>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</h3>
              </div>
              <div key="slide4">
                <picture>
                  <source media="(max-width:1400px)" srcset={sliderImgMini} />
                  <img src={sliderImg} alt="Slider"/>
                </picture>
                <h2>Marcenas mattis egestas</h2>
                <h3>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</h3>
              </div>
          </Carousel>
        </div>
      </div>
  );
}

export default Slider;