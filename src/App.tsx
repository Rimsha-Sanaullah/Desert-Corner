import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import HorizontalPosts from './components/SmallCardsData/HorizontalPosts';
import Footer from './components/Footer';
import posts from './components/SmallCardsData/CardData';
import MiddleCard from './components/MiddleCard';
import ChefData from './components/ChefData';

function App() {
  return (
    <div style={{backgroundColor: '#F3E8EE'}} className='space-y-24'>
      <Navbar />
      <HeaderSection />
      <HorizontalPosts posts={posts} />
      <MiddleCard />
      <ChefData />
      <Footer />
    </div>
  );
}

export default App;
