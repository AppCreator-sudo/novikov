import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Categories from './components/Categories';
import Concept from './components/Concept';
import Schedule from './components/Schedule';
import Team from './components/Team';
import BarMenu from './components/BarMenu';
import DishList from './components/DishList';
import './App.css';
//import logo from './assets/logo.png'; // Импорт логотипа

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sideMenu = document.querySelector('.side-menu');
      if (isMenuOpen && sideMenu && !sideMenu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
      <Router>
        <div className="app">
          {/* Логотип на заднем фоне */}
          <div className="logo-background"></div>

          <header>
            <div className="menu-icon" onClick={toggleMenu}>
              &#9776;
            </div>
            <h1>ПТИЧКА by Novikov</h1>
          </header>

          <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleMenu}>
              &times;
            </button>
            <ul>
              <li><Link to="/bar-menu" onClick={toggleMenu}>Меню Бара</Link></li>
              <li><Link to="/schedule" onClick={toggleMenu}>График работы</Link></li>
              <li><Link to="/team" onClick={toggleMenu}>Команда проекта</Link></li>
              <li><Link to="/Concept" onClick={toggleMenu}>Концепция</Link></li>
              <li><Link to="/kitchen-menu" onClick={toggleMenu}>Меню Кухни</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/bar-menu" element={<BarMenu />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/team" element={<Team />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/kitchen-menu" element={<Categories />} />
            <Route path="/kitchen-menu/:category" element={<DishList />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
