import React from 'react'
import {Link} from 'gatsby'
import SocialCard from './SocialCard/SocialCard';
import './Footer.css'

export default ({data}) => (
  <div>    
    <footer className="footer">
{  console.log(data.phone)}

    <div>
    <div className='footer-center'>
    <div className="footer-wrapper">
      <div className="top-img"></div>
      <div className="container-fluid">
        <div className="footer-social-icons">
           <SocialCard data = {data}  />
        </div>    
        <div className="footer-mid-part">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="footer-section-one">
                <div className="footer-heading"><h2>Contact Us</h2></div>
                 <div className="footer-contact-box">
                <div className="footer-contact-icon"><i className="fa fa-map-marker"></i></div>
                <div className="footer-contact-text">
                  <p>{data.address}</p>
                </div>
                <div className="clr"></div>
              </div>
    
               <div className="footer-contact-box">
                <div className="footer-contact-icon"><i className="fa fa-phone"></i></div>
                <div className="footer-contact-text">
                  <p><a href="tel:+012-3456-789">{data.phone}</a></p>
                </div>
                <div className="clr"></div>
              </div>
    
    
               <div className="footer-contact-box">
                <div className="footer-contact-icon"><i className="fa fa-envelope"></i></div>
                <div className="footer-contact-text">
                  <p><a href="mailto:info@learningtutorialpoingt.com">{data.email}</a></p>
                </div>
                <div className="clr"></div>
              </div>
                  
              </div>
    
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="footer-section-two">
                <div className="footer-heading"><h2>Quick Link</h2></div>
                <div className="footer-link">
                  <ul>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/about/'>About Us</Link></li>
                      <li><Link to='/products/'>Products</Link></li>
                      <li><Link to='/services/'>Services</Link></li>
                      <li><Link to='/contact/'>Contact Us</Link></li>
                      <li><Link to='/blog/'>Blog</Link></li>
                      <li><Link to='/careers/'>Careers</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
     <div className="footer-bottom">
       <div className="row">
         <div className="col-lg-12 col-md-12 col-sm-12">
         © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          Kpinfoway
         </div>
       </div>
     </div>
    
    
      </div>
    </div>
    </div>
    </div>
    </footer>
  </div>
)
