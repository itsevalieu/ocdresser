import React, { Fragment } from 'react';
import { Header, Footer } from './components/common';
import './App.css';

export default function App({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}