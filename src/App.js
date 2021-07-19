import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'react-image-lightbox/style.css';
import './App.css';

//pages
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Kaus from './pages/Kaus/Kaus';
import Indicator from './pages/Indicator/Indicator';

const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route exact path='/' component={Landing} />
      <Route exact path='/about' component={About} />
      <Route exact path='/kaus-insurance' component={Kaus} />
      <Route exact path='/indicator' component={Indicator} />
      <Footer />
    </div>
  );
}

export default App;
