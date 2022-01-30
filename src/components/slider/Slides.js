import React from 'react';
import "./Slider.css";

const slidesInfo =[
    {
        src:"https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/85535e05d1f130b16751c8308cfbb19b.png",
        alt: "Tic Tac Toe",
        desc: "Tic Tac Toe"
    },
    {
        src:"https://media.istockphoto.com/vectors/calculator-icon-accounting-sign-calculate-finance-symbol-stock-vector-vector-id1137975153?k=20&m=1137975153&s=612x612&w=0&h=O_m_y08Rv0D-2tvlM0OhCMnSmPeK5FsRZ1Hii_oLSUs=",
        alt: "Calculadora",
        desc: "Calculadora "
    },
    {
        src:"https://cdn.pixabay.com/photo/2016/05/08/14/58/icon-1379228_960_720.png",
        alt: "proyecto web",
        desc: "Pagina Web "
    } 
]
const slides = slidesInfo.map (slide => (
 <div className='slide-container'>
     <img src={slide.src} alt={slide.alt} />
     <div className='slide-desc'>
         <span>{slide.desc}</span>
     </div>
 </div>
))



export default slides;
