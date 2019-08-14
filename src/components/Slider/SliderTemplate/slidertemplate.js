/**
 * 
 * SliderTemplate : take one object and set it to slider 
 * 
 */
import React from 'react';
/*------- slidertemplate.css : For Style ---------- */
import './slidertemplate.css';
import banner from '../../../../static/images/banner.jpeg';

const SliderTemplate = () => {
    return(
        <div 
         className = "image" 
         >
           <img src={banner} className="responsive" alt='dummeys' />
        </div>
    )
}

export default SliderTemplate;