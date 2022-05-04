import React from 'react';
import {Header} from './components/Header/Header';
import {List} from './components/List/List';
import {Footer} from './components/Footer/Footer';

function App() {
  
  return (
    <div className='container usercenter' >
      <Header />
      <List />
      <Footer />
    </div >
  );
}

export default App;
