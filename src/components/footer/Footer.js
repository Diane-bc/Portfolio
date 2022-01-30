import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
 <footer className='footer'>
   <div className='footer-info'>
       <h1>Dianela Fernandez</h1>
       <p>Córdoba Argentina</p>
   </div>
   <div className='footer-contact'>
       <h3>Contactame</h3>
       <p>And let's get to work</p>
     </div>
     <div className='footer-sns'>
         <div className='design-by'>
             dianela.fernandez02@gmail.com
         </div>
         <div className='sns-links'>
             <a href='https://www.linkedin.com/in/dianela-fernandez-980b56213/' target="_blank" rel='noreferrer'>
                 <i className='fab fa-linkedin linkedin'></i>
             </a>
             <a href='https://www.instagram.com/dianefz_/?hl=es'target="_blank" rel='noreferrer'>
                 <i className='fab fa-instagram instagram'></i>
             </a>
             <a href='https://github.com/Diane-bc'target="_blank" rel='noreferrer'>
                 <i className='fab fa-github github'></i>
             </a>
         </div>

     </div>
 </footer>
  )
}

export default Footer;
