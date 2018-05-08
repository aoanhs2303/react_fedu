import React, { Component } from 'react';
import './App.css';
import NoiDung from './NoiDung';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: "khoitao",
      trangThai2: "khoitao2"
    }
  }
  
  
  componentWillMount() {
    console.log('componentWillMount đã chạy');
  }
  
  componentDidMount() {
    console.log('componentDidMount đã chạy');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate đã chạy');
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate đã chạy');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate đã chạy');
  }
  
  capNhatState = () => {
    this.setState({
      trangThai: "update",
      trangThai2: "update2"
    });
  }

  render() {
    console.log('Day la ham render');
    console.log(this.state.trangThai);
    return (
      <div className="App">
        <button onClick={() => this.capNhatState()}>Click Me</button>
        <NoiDung ten={this.state.trangThai2}/>
      </div>
    );
  }
}

export default App;
