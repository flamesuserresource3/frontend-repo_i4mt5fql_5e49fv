import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClassList from './components/ClassList';
import Attendance from './components/Attendance';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ClassList />
      <Attendance />
      <Footer />
    </div>
  );
}

export default App;
