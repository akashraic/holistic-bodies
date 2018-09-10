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
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import Headroom from 'react-headroom';

library.add(faInstagram);



class App extends Component {
  render() {
      return <div className="App">


          <ScrollableAnchor id="Home">
              <div><Home/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="About">
              <div><About/></div>
          </ScrollableAnchor>

          <Headroom
              style={{
                  transition: 'all .5s ease-in-out'
              }}
          >
              <div><Navbar/></div>
          </Headroom>

          <ScrollableAnchor id="Videos">
              <div><Videos/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Blog">
              <div><Blog/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Merchandise">
              <div><Merchandise/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Training">
              <div><Training/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Subscribe">
              <div><Subscribe/></div>
          </ScrollableAnchor>

          <ScrollableAnchor id="Footer">
              <div><Footer/></div>
          </ScrollableAnchor>
      </div>;
  }
}

export default App;
