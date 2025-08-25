import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryShowcase from './components/CategoryShowcase';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CategoryShowcase />
      <MainContent />
    </div>
  );
}

export default App;