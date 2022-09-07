import WebFont from 'webfontloader';
import './App.css';
import React, { useEffect } from 'react';
import Main from './components/Main';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Sacramento', 'Baloo Tamma 2']
      }
    });
   }, []);

  return (
    <Main />
  );
}

export default App;
