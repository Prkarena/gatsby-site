import React from 'react';
import {FaFacebookSquare , FaInstagram , FaLinkedin , FaYoutube , FaMobileAlt  , FaEnvelope } from 'react-icons/fa';

import './SocialCard.css';

const SocialCard = ({data}) => {
    return(
        <div class="middle">
            <a class="btn" href={data.title}>
            <i class="fab fa-facebook-f">
            </i>
            </a>
            <a class="btn" href={data.subtitle}>
            <i class="fab fa-linkedin"></i>
            </a>
            <a class="btn" href="http://www.prakashkarena.xyz">
            <i class="fab fa-google"></i>
            </a>
            <a class="btn" href={data.section2}>
            <i class="fab fa-instagram"></i>
            </a>
            <a class="btn" href={data.section1}>
            <i class="fab fa-youtube"></i>
            </a>    
      </div>
    )
}

export default SocialCard;
