import React from 'react';
import "./About.css";
import foto from "../../media/foto.jpeg"

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Sobre mi</h3>
                <p>Mi nombre es Dianela Fernandez, tengo 19 años y estudio Lic. en ciencias de la computacion en la Facultad de Matemática, Fisica, Astronomía y Computacion (FAMAF). Soy una persona apasionada por la programación y quiero aportar todos mis conocimientos a una empresa y a un equipo para crear cosas increibles, tengo capacidad analítica, buena comunicación e interes por el aprendizaje constante. Además cuento con un nivel de ingles avanzado (C1), coreano principiante (A2) y tengo conocimientos en tecnologias altamente requeridas en el mundo IT actual (Java, Spring Framework, MySql, Html5, Css3,JavaScript, React, Git)</p>
            </div>
            <div className='about-img'>
              <img  src={foto}/>
            </div>
        </div>
    )
};

export default About;
