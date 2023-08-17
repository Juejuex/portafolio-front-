import React from "react";
import react from '../../assets/img/Habilidades/React-icon.svg.png';
import tailwind from '../../assets/img/Habilidades/tailwind.png';
import js from '../../assets/img/Habilidades/javascript.png';
import django from '../../assets/img/Habilidades/django.png';
import python from '../../assets/img/Habilidades/python.png';
import sql from '../../assets/img/Habilidades/sql.png';

function Tarjetas() {
  const cards = [
    { title: "React", image: react },
    { title: "Tailwind", image: tailwind },
    { title: "JavaScript", image: js },
    { title: "Django", image: django },
    { title: "Python", image: python },
    { title: "SQL", image: sql },
  ];

  function renderCard(card) {
    return (
      <Card
        title={card.title}
        image={card.image}
        className=""
      />
    );
  }

  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index}>
            {renderCard(card)}
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ title, image }) {
  return (
    <div className="w-72 h-96 p-4 bg-dark rounded-lg shadow-lg flex flex-col justify-center">
      <div className="group">
        <img src={image} alt={title} className="w-full h-60 object-contain rounded filter brightness-50 group-hover:brightness-150" />
        <h1 className="text-gray font-bold text-lg mt-4 text-center group-hover:text-beige">{title}</h1>
      </div>
    </div>
  );
}

export default Tarjetas;


