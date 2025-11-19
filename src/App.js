import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/home';
import About from './pages/About/about';
import Logement from './pages/Logement/logement';
import NotFound from './pages/NotFound/notfound';

function App() {
  return (
    <div className="App">
      {/* Simple header / nav just to test routing */}
      <header>
        <nav>
          <Link to="/">Accueil</Link> |{' '}
          <Link to="/about">À propos</Link>
        </nav>
      </header>

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;