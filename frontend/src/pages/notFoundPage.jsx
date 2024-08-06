import React from 'react';
import Navbar from '../components/navbar';

function NotFoundPage() {
  return (
    <div>
      <Navbar />
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;
