import React from 'react';
import './Slider.scss';
import sliderImgMini from '../../assets/images/slider-image-mini.png';
import sliderImg from '../../assets/images/slider-image.png';

const Slider = () => {
  return (
      <div className="slider">
        <picture>
          <source media="(max-width:1400px)" srcset={sliderImgMini} />
          <img src={sliderImg} alt="Slider"/>
        </picture>
        <h2>Marcenas mattis egestas</h2>
        <h3>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</h3>
        <div class="slider-navigation">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  );
}

export default Slider;