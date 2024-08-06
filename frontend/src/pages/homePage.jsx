import React from 'react';
import Navbar from '../components/navbar';
import '../index.css'

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <div className="header">
          <h1>¡Welcome to 1v1HUB!</h1>
          <p>Keep track of your matches against friends and see your performance history and who is the father</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
