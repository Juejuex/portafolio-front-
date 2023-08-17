import yop from "../../assets/img/Home/yo.png";
import React from 'react';

function Info() {
  return (
    <div className="m-4 p-4 rounded-lg text-center bg-dark sm:flex sm:items-start md:flex md:items-start lg:flex lg:items-start">
      <div className="text-center sm:text-left flex flex-col sm:w-1/2 sm:pr-6 md:w-1/2 md:pr-12 lg:w-1/2 lg:pr-20">
        <div className="flex-grow">
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-light">Hola! soy</p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-beige">SERGIO BRIONES</h1>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl font-medium text-light">Desarrollador full stack</p>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-light">
            Soy un desarrollador web apasionado por crear soluciones innovadoras y
            atractivas. Tengo experiencia en el uso de tecnologías como React, Django,
            Python y Tailwind para crear aplicaciones web dinámicas y responsivas.
          </p>
        </div>
        <div className="space-x-2 sm:space-x-4 pt-4 sm:pt-6">
          <button className="bg-transparent outline outline-2 outline-offset-2 p-2 sm:p-3 md:p-4 lg:p-5 text-beige py-1 sm:py-2 px-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full hover:bg-light w-28 sm:w-36 md:w-40 lg:w-44">
            DESCARGAR CV
          </button>
          <button className="bg-beige text-gray py-1 sm:py-2 px-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-full hover:bg-light w-28 sm:w-36 md:w-40 lg:w-44">
            Contacto
          </button>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 md:mt-0 lg:mt-0 sm:w-1/2 md:w-1/2 lg:w-1/2 sm:pl-6 md:pl-12 ">
        <img
          src={yop}
          alt="Sergio Briones"
          className="w-full sm:w-auto md:w-auto lg:w-2/3 sm:float-right"
        />
      </div>
    </div>
  );
}

export default Info;
