import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Accomodation from './pages/Accomodation/Accomodation';
import PageError from './pages/PageError/PageError'
import './style/App.scss';

function App() {
  return (
      <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/accomodation/:appartementId" element={<Accomodation />} />
              {/* Page 404 Not Found */}
              <Route path="*" element={<PageError />} />
            </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;