import React, {FunctionComponent} from 'react';
import {Header} from './components/Header/Header';
import {List} from './components/List/List';
import {Footer} from './components/Footer/Footer';

interface appProps {
  history: History
}

const App: FunctionComponent<appProps> = function (props) {
  
  return (
    <div className='container usercenter' >
      <Header />
      <List />
      <Footer />
    </div >
  );
}

export default App;
