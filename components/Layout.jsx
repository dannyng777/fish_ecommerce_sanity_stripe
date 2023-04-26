import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children /** react allows access to child components through prop called "children"*/}) => {
  return (
    <div className="layout">
      <Head>
        <title>Fin-tastic Fish & Co.</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children /** this is from pages/index.js */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout