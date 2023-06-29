import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/ui/navigation';
import Header from './components/header/header';
import About from './components/about/about';
import Menu from './components/menu/menu';

function App() {
  return (
  <>
   <Navigation/>
   <Header />
  <About/>
  <Menu/>
  </>
  );
}

export default App;
