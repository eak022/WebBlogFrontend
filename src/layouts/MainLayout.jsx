import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow flex items-center justify-center container mx-auto p-4 sm:p-6 lg:p-8">
        {/* เนื้อหาหลักของหน้า */}
        <Outlet />
      </main>

      <footer className="shadow-lg ">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
