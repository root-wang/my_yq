import React, { FunctionComponent } from 'react';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Footer } from './components/Footer/Footer';
import {History}  from 'history'

interface appProps {
  history: History
}

const App: FunctionComponent<appProps> = function (props) {

  return (
    <div className='container usercenter' >
      <Header {...props}/>
      <List />
      <Footer />
    </div >
  );
}

export default App;
