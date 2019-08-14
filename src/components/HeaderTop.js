import React from 'react';


import {FaFacebookSquare , FaInstagram , FaLinkedin , FaYoutube , FaMobileAlt  , FaEnvelope } from 'react-icons/fa';
import './HeaderTop.css';

const HeaderTop = ({data}) => { 
    return(
        <div className='container header-top' >
        <div class="row">
            <div class="col-md-4" id='social'>
                <a href={data.title} ><FaFacebookSquare /></a> 
                <a href={data.section2} > <FaInstagram/></a> 
                <a href={data.subtitle} ><FaLinkedin/></a> 
                <a href={data.section1} ><FaYoutube/></a> 
            </div>
            <div class="col-md-4 icons" id='phone'>
                    <div className='row'>
                        <div className=' col-xs-1 '><FaMobileAlt/></div>
                        <div className='   col-xs-11 '><label>{data.phone}</label> </div>
                    </div>
            </div>
            <div class="col-md-4 icons" id='email'>
                <div className='row'>
                        <div className=' col-xs-1 '>  <FaEnvelope/> </div>
                        <div className=' col-xs-11  '> <label>{data.email}  </label>  </div>
                </div>                       
            </div>
        </div>
              
                
        </div>
    );
}

export default HeaderTop;


