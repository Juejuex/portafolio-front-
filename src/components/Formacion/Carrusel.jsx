import React, { useState } from 'react';
import aws from '../../assets/img/Formacion/Certificaciones/AWS.png'
import coursera from '../../assets/img/Formacion/Certificaciones/Coursera.jpg'
import aprendizaje from '../../assets/img/Formacion/Certificaciones/Forge_Aprendizaje.png'
import liderazgo from '../../assets/img/Formacion/Certificaciones/Forge_Liderazgo.png'
import orientacion from '../../assets/img/Formacion/Certificaciones/Forge_Orientacion.png'

const images = [
  { url: aws, title: 'AWS re/Start Graduate', comment: 'AWS', link: 'https://www.credly.com/badges/1b6fb24a-390f-4b9b-b6dc-c5bf81a1fc55/linked_in_profile' },
  { url: coursera, title: 'Configuration Management and the Cloud', comment: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/5ZXLH5L9W3FY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
  { url: coursera, title: 'Technical Support Fundamentals', comment: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/A868QG5VMQY4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
  { url: coursera, title: 'The Bits and Bytes of computer networking', comment: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/HH8CH9TMMMTS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
  { url:coursera , title: 'Introduction to git and github', comment: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/5KV2H7ATX9PW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
  { url:coursera , title: 'Principios y Regulaciones de Seguridad de la informacion', comment: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/65MSA8DTHGSM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
  { url:coursera , title: 'Troubleshooting and Debugging Techniques', comment: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/FDSCD6B3AMHC' },
  { url:coursera , title: 'Using Python to Interact whit the Operating Systems', comment: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/FDSCD6B3AMHC' },
  { url:coursera , title: 'Crash Course in Python', comment: 'Coursera', link:'https://www.coursera.org/account/accomplishments/certificate/ULQR3M5KZFW7' },
  { url: aprendizaje, title: 'Compromiso con el aprendizaje', comment: 'Forge', link: 'https://www.acreditta.com/credential/4e5075fd-e490-43ea-9e44-539c80b09bb9?utm_source=linkedin_profile&resource_type=badge&resource=4e5075fd-e490-43ea-9e44-539c80b09bb9' },
  { url: orientacion, title: 'Orientacion al Logro', comment: 'Forge', link: 'https://www.acreditta.com/credential/af2fc436-f700-4a39-bbbd-212988af0a8b' },
  { url: liderazgo, title: 'Liderazgo personal', comment: 'Forge', link: 'https://www.acreditta.com/credential/bf3878a8-16c3-4478-b48d-bc36a43e0274' },
];

const Carrusel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
          <div className='text-2xl font-bold pb-10 text-beige text-center '>
          <a href='https://www.linkedin.com/in/serbrigue/details/certifications/' target='_blank' rel="noreferrer">Certificaciones</a>
          </div>
      <a href={images[currentImage].link} target="_blank">
        <img
          className="w-full h-[400px] object-contain ml-2"
          src={images[currentImage].url}
        />
      </a>
      <div className="absolute bottom-0 left-0 right-0 p-4  bg-opacity-75 text-light text-center pb-10 ml-2">
        {images[currentImage].title}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 text-light text-center ml-2">
        {images[currentImage].comment}
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className="bg-gray-900 text-white p-2 rounded-full ml-2 hover:bg-gray focus:outline-none"
          onClick={handlePrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          className="bg-gray-900 text-white p-2 rounded-full mr-2 hover:bg-gray focus:outline-none"
          onClick={handleNext}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;


