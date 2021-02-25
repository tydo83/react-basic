import React, { Component } from 'react'


export default class App extends Component {
  state = {
    isTrue: false,
    name: ""
  }  

  buttonHandler = () => {
    this.setState((prevState) => {
      return { 
        isTrue: !prevState.isTrue,
        name: !prevState.isTrue ? "You" : "Me"
      }
    })
  }

  render() {
    return (
      <div style={{ background: this.state.isTrue ? "green" : "red"}}> 
        <p>The toggle value is: {this.state.isTrue.toString()}</p>  
        <button onClick={this.buttonHandler}>Toggle me</button>
        <div>{this.state.name}</div>

      </div>
    )
  }
}


