import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import Header from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MobileContext from './mobile.context';
import handleResize from './handle-resize';
import 'react-image-lightbox/style.css';
import './App.css';

//pages
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Kaus from './pages/Kaus/Kaus';
import Indicator from './pages/Indicator/Indicator';
import Runkeeper from './pages/Runkeeper/Runkeeper';
import Keller from './pages/Keller/Keller';

const App = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 876)
  useEffect(() => {
    const callBack = () => {
      setIsMobile(window.innerWidth < 876)
    }
    handleResize(callBack)
  }, [])
  return (
    <MobileContext.Provider value={{isMobile}}>
      <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/kaus-insurance' component={Kaus} />
        <Route exact path='/indicator' component={Indicator} />
        <Route exact path='/keller-strings' component={Keller} />
        <Route exact path='/runkeeper' component={Runkeeper} />
        <Footer />
      </div>
    </MobileContext.Provider>
  );
}

export default App;
