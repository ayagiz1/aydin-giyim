import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryShowcase from './components/CategoryShowcase';
import MainContent from './components/MainContent';
import CustomerComments from './components/CustomerComments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CategoryShowcase />
      <MainContent />
      <CustomerComments />
      <Footer />
    </div>
  );
}

export default App;