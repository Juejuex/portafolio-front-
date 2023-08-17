import React from 'react';
import yo from '../../assets/img/SobreMi/yo2.png';

function Intro() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={yo}
          alt="Sergio Briones"
          className="w-full sm:w-auto md:w-auto lg:w-2/3 sm:float-right"
        />
      </div>
      <div className="text-light p-8 rounded-lg shadow-lg w-full md:w-1/2 md:ml-4 mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4 text-beige">
          ¡Hola, soy un estudiante autodidacta de desarrollo web!
        </h2>
        <p className="text-light">
          Mi enfoque actual es convertirme en un desarrollador web experto. Estoy emocionado por explorar nuevas tecnologías,
          resolver desafíos y crear soluciones innovadoras. Mi pasión por el aprendizaje constante me impulsa a mejorar mis habilidades 
          y mantenerme al día con las últimas tendencias en el desarrollo web.
        </p>
        <p className="text-light">
          Estoy entusiasmado por la oportunidad de contribuir y aprender en un entorno laboral dinámico. Siempre estoy abierto a nuevos desafíos y oportunidades para seguir creciendo en mi carrera.
        </p>
        <div className="flex flex-col md:flex-row">
          <section className="mb-6 md:mr-4 w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-2 text-beige">Hobbies</h3>
            <ul className="list-disc ml-6 text-light">
              <li>Ajedrez</li>
              <li>Lectura</li>
            </ul>
          </section>
          <section className="mb-6 w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-2 text-beige">Intereses</h3>
            <ul className="list-disc ml-6 text-light">
              <li>Cyberseguridad</li>
              <li>Electrónica</li>
              <li>Cloud</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Intro;

  