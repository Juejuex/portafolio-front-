import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobremi from './pages/Sobremi';
import Habilidades from './pages/Habilidades';
import Formacion from './pages/Formacion';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route path='/sobre_mi' element={<Sobremi/>}/>
          <Route path='/habilidades' element={<Habilidades/>}/>
          <Route path='/formacion' element={<Formacion/>}/>
          <Route path='/proyectos' element={<Proyectos/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;
