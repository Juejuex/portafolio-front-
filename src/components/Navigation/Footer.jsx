import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer(){
    return(
        <footer className="w-full py-8 shadow-md bg-dark flex justify-center items-center">
        <a
          href="https://github.com/Juejuex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-beige hover:text-gray mx-4"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/serbrigue/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-beige hover:text-gray mx-4"
        >
          <FaLinkedin size={32} />
        </a>
      </footer>
    )
}


export default Footer;