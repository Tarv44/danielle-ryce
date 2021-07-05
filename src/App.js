import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import Footer from './components/Footer/Footer';
import './App.css';

const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route exact path='/' component={Landing} />
      <Footer />
    </div>
  );
}

export default App;
