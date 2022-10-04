import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>How it works</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/about'>Contacts</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href ='https://www.linkedin.com/in/nelson-mwanzia-b5914817a/'><i class='fab fa-linkedin' />  LinkedIn </a>
            <a href ='https://web.facebook.com/bonzaicf'><i class='fab fa-facebook-f' />  Facebook </a>
            <a href ='https://github.com/nelsonmutindamwanzia'><i class='fab fa-github' />  GitHub</a>
            <a href ='https://twitter.com/mu_tinda'><i class='fab fa-twitter' />  Twitter</a>
          </div>
          </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TraDvisor
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TraDvisor © 2022 || All rights reserved</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;