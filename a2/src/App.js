import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';

class App extends Component {
  render() {
    return (
      <div className="vidu2">
        <TopMenu/>
        <Header/>
        <Content tieude="For those about to rock ..."
                 vitri1="order-lg-2"
                 vitri2="order-lg-1"
                 anh="img/01.jpg"/>
        <Content tieude="We salute you!"
                 vitri1="order-lg-1"
                 vitri2="order-lg-2"
                 anh="img/02.jpg"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
