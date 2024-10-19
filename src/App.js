import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Concept from './components/Concept';
import Schedule from './components/Schedule';
import Team from './components/Team';
import KitchenMenu from './components/KitchenMenu';
import BarMenu from './components/BarMenu';
import './App.css';

function App() {
  return (
      <Router>
        <div className="app">
          <header>
            <h1>ПТИЧКА</h1>
          </header>
          <nav>
            <ul>
              <li><Link to="/bar-menu">Меню Бара (для официантов)</Link></li>
              <li><Link to="/schedule">График работы</Link></li>
              <li><Link to="/team">Команда проекта</Link></li>
              <li><Link to="/concept">Концепция Хинкальной</Link></li>
              <li><Link to="/kitchen-menu">Меню Кухни (для официантов)</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/bar-menu" element={<BarMenu />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/team" element={<Team />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/kitchen-menu" element={<KitchenMenu />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
