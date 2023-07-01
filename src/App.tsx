import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/menuPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
