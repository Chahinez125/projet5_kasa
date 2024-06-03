import React from 'react'
import './Footer.scss'
import logoFooter from '../../image/kasa_white.svg'
function Footer() {
  return (
    <div className='footer'>
      <img src= {logoFooter} alt="logo"></img>
      <p>© 2020 Kasa. All rights reserved</p>
      </div>
    
  );
}
export default Footer;
