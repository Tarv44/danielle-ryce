import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import './App.css';

const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route exact path='/' component={Landing} />
    </div>
  );
}

export default App;
