import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One() {
  return (
    <div>
      <h1>Khong duoc 2 thang cung cap</h1>
      <h2>Cach so 1</h2>
    </div>
  );
}

var Two = function() {
  return (
    <div>
      <h3>Cach so 2</h3>
      <h3>Anonymous function</h3>
    </div>
  );
}

var Three = () => (
  <div>
    <h3>Cach so 3</h3>
    <h3>Arrow function</h3>
  </div>
);

class Four extends Component {
  render() {
    return (
      <div>
        <button>React JS Component so 4</button>
      </div>
    );
  }
}

//Cach 1 su dung Props bằng fucntion
function Number1(props) {
  return (
    <div>
      <div className="col-md-6">
        <img src={props.linkanh} alt="anh"/>
        <h1>{props.tieude}</h1>
      </div>
    </div>
  )
}
//Cach 2 su dung Props bang Class
class Number2 extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6">
          <img src={this.props.linkanh} alt="anh"/>
          <h1>{this.props.tieude}</h1>
        </div>
      </div>
    );
  }
}

// Ví dụ vè map
const so = [1,2,3,4,5,6];
const so1 = so.map((x) => x*2);
class Map extends Component {
  render() {
    return (
      <div>
        {so1}
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Number2 tieude="San pham 3" linkanh="https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&h=350"/>

        <div className="container">
          <div className="row">
            <Number1 tieude="San pham 1" linkanh="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=350"/>
            <Number1 tieude="San pham 2" linkanh="https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=350"/>
          </div>
        </div>
        <Map/>
        <One/>
        <Two/>
        <Three/>
        <Four/>
      </div>
    );
  }
}

export default App;
