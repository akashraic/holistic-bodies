import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';
import Navbar from './Components/CustomNavbar'
import Home from './Components/Home';
import About from './Components/About';
import Videos from './Components/Videos';
import Blog from './Components/Blog';
import Merchandise from './Components/Merchandise';
import Training from './Components/Training';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Foot from './Components/Foot';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Headroom from 'react-headroom';
import Main from "./Components/Main";
import {Route} from "react-router-dom";
import Home_Videos from "./Components/Home_Video";

library.add(faInstagram);
library.add(faEnvelope);



class App extends Component {
  render() {
      return (

          <div className="App">

          <ScrollableAnchor id="Home">
              <div><Route exact path='/' component={Home}/></div>
          </ScrollableAnchor>
              <Home_Videos/>

          <ScrollableAnchor id="About">
              <div><Route exact path='/' component={About}/></div>
          </ScrollableAnchor>

          <Headroom
              style={{
                  transition: 'all .5s ease-in-out'
              }}
          >
              <div><Route exact path='/' component={Navbar}/></div>
          </Headroom>

          <ScrollableAnchor id="Videos">
              <div><Route exact path='/' component={Videos}/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Blog">
              <div><Route exact path='/' component={Blog}/></div>
          </ScrollableAnchor>

              <ScrollableAnchor id="Training">
                  <div><Route exact path='/' component={Training}/></div>
              </ScrollableAnchor>

              <ScrollableAnchor id="Merchandise">
                  <div><Route exact path='/' component={Merchandise}/></div>
              </ScrollableAnchor>

          <ScrollableAnchor id="Subscribe">
              <div><Route exact path='/' component={Subscribe}/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Footer">
              <div><Route exact path='/' component={Footer}/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Foot">
              <div><Route exact path='/' component={Foot}/></div>
          </ScrollableAnchor>


              <Main />
      </div>

      );


  }
}

export default App;
