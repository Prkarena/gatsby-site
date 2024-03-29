/**
 * 
 * Slider : take one object and set it to slider 
 * 
 */
import React from 'react';
/*------- slidertemplate.css : For Style ---------- */
import './Slider.css';
import banner1 from '../../../static/images/banner.jpeg';
import banner2 from '../../../static/images/footer-bg.jpg';
import banner3 from '../../../static/images/buns.jpg';

const Slider = () => {
    return(
<div 
    className = "slider" 
    >
<div class="container">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div class="carousel-inner">

      <div class="item active">
        <img src={banner1} alt="Los Angeles"/>
        <div class="carousel-caption">
          <h3>Los Angeles</h3>
          <p>LA is always so much fun!</p>
        </div>
      </div>

      <div class="item">
        <img src={banner2} alt="Chicago" />
        <div class="carousel-caption">
          <h3>Chicago</h3>
          <p>Thank you, Chicago!</p>
        </div>
      </div>
    
      <div class="item">
        <img src={banner3} alt="New York" />
        <div class="carousel-caption">
          <h3>New York</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
  
    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
        </div>
    )
}

export default Slider;