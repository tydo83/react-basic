//rcc
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isTrue: false,
    name: "hamster",
  }

  toggleButton = () => {
    // this.setState({
    //   isTrue: !this.state.isTrue,
    // })
    this.setState((prevState) => {
      console.log(prevState)
      return {
        isTrue: !prevState.isTrue,
        name: !prevState.isTrue ? "Mighty Hamster" : "Not Mighty Hamster"
      }
    })
  
  }

  render() {
    // let tempVar = "I am a tempVar"
    // if(this.state.isTrue) {
    //   tempVar = "I am not a tempVar"
    // }
    // return (<div>{tempVar}</div>)
    return (
    <div style={{ background: this.state.isTrue ? "red" : "orange" }}>
        {/* {this.state.isTrue ? "I am a true tempVar" : "I am a false tempBar"} */}
        {/* {this.state.isTrue ? this.state.name : "I am a false tempBar"} */}
        <div>The toggle value is: {this.state.isTrue.toString()}</div>
        <div>
          <button onClick={this.toggleButton}>Toggle Me</button>
        </div>
        <div>
          {this.state.name}
          {/* {
          this.state.isTrue ?
            <span>{this.state.name}</span> :
            <span>"I am a false tempBar"</span>
          } */}
        </div>

      </div>
    )
  }
}
