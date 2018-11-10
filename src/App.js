import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      fibNumbers: [],
      errorMessage: ""
    }

  }
  renderSequence(){
    return (
      <div >
      <ul className="fib-container">{this.state.fibNumbers.map((number, index) =>{
              return (
                  <div className="fib-list-item" key={index}>
                  <li  >
                  <span>{number}</span>
                  </li>
                  </div> 
              )
          })}</ul>
      </div>
    )
  }
  getFib(x){
    if(!x){
      this.setState({
        errorMessage: ""
      })
      return
    }
    if(isNaN(x)){
      this.setState({
        errorMessage: "invalid number"
      })
      return
    }
    if(x == 0){
      this.setState({
        errorMessage: "invalid number"
      })
      return
    }
    if(x > 90){
      this.setState({
        errorMessage: "maximum number is 90"
      })
      return
    }
    fetch(`http://localhost:8080/api/fibonacci/${x}` )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            fibNumbers: result.arr,
            errorMessage: ""
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            errorMessage: "server error"
          });
        }
      )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>
            Fibonacci Numbers!
          </h1>
        </header>
        <div>
          <span className="error-message">{this.state.errorMessage}</span>

          <span className="input-text">Display <input className="input" onChange={e=>(this.getFib(e.target.value))}/> Fibonacci numbers.</span>
        </div>
        {this.renderSequence()}
      </div>
    );
  }
}

export default App;
