import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
        <main >
          <Outlet /> {/* This renders the matched child route */}
        </main>
        <footer>
        <Footer />
        </footer>
    </div>
  );
};


export default MainLayout;