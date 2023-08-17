import React from 'react';
import RH_Consultores from '../../assets/img/Proyectos/RH_consultores.png';
import Laboratorios from '../../assets/img/Proyectos/Laboratorio.png';

function Galeria() {
  const projects = [
    { title: "RH Consultores", image: RH_Consultores, link: "https://github.com/Juejuex/RH-Consultores" },
    { title: "Laboratorio", image: Laboratorios, link: "https://github.com/Juejuex/laboratorio" },
    { title: "Laboratorio", image: Laboratorios, link: "https://github.com/Juejuex/laboratorio" },
    { title: "Laboratorio", image: Laboratorios, link: "https://github.com/Juejuex/laboratorio" },
    { title: "Laboratorio", image: Laboratorios, link: "https://github.com/Juejuex/laboratorio" },
    { title: "Laboratorio", image: Laboratorios, link: "https://github.com/Juejuex/laboratorio" },

    // Agrega más proyectos aquí
  ];

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {projects.map((project, index) => (
          <div key={index} className="flex w-full md:w-1/2 lg:w-1/3 p-1 md:p-2">
            <ProjectCard
              title={project.title}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, image, link }) {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <a href={link} title={title} target='_blank' rel="noreferrer">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image}
        />
      </a>
    </div>
  );
}

export default Galeria;
