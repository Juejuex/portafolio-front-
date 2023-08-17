import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Importa el ícono FaTimes
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 bg-dark">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-xl">Logo</div>
          {/* Menú hamburguesa */}
          <div className="lg:hidden">
            {isMenuOpen ? (
              <FaTimes
                className="text-beige text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <GiHamburgerMenu
                className="text-beige text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
          {/* Links */}
          <ul className={`lg:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <NavLink
                to="/"
                exact
                className="text-lg inline-flex font-medium leading-6 text-beige border-b-2 border-dark hover:border-gray transition duration-300 ease-in-out mx-4"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre_mi"
                exact
                className="text-lg inline-flex font-medium leading-6 text-beige border-b-2 border-dark hover:border-gray transition duration-300 ease-in-out mx-4"
              >
                Sobre mi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/habilidades"
                exact
                className="text-lg inline-flex font-medium leading-6 text-beige border-b-2 border-dark hover:border-gray transition duration-300 ease-in-out mx-4"
              >
                Habilidades
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formacion"
                exact
                className="text-lg inline-flex font-medium leading-6 text-beige border-b-2 border-dark hover:border-gray transition duration-300 ease-in-out mx-4"
              >
                Formación
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/proyectos"
                exact
                className="text-lg inline-flex font-medium leading-6 text-beige border-b-2 border-dark hover:border-gray transition duration-300 ease-in-out mx-4"
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                exact
                className="text-lg inline-flex font-medium leading-6 text-beige border-b-2 border-dark hover:border-gray transition duration-300 ease-in-out mx-4"
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;