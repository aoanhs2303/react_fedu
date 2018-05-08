import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav'
import Footer from './Footer'
// import Home from './Home'
// import News from './News'
// import NewsDetail from './NewsDetail'
// import Contact from './Contact'
import DieuHuongUrl from '../router/DieuHuongUrl';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>  
          <Nav/>
          {/* <Home/> */}
          {/* <News/> */}
          {/* <NewsDetail/> */}
          {/* <Contact/> */}
          <DieuHuongUrl/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
