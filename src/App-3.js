import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteMovie: "",
      favoriteMovieArr: []
    }
  }

  handleOnChange = (event) => {
    this.setState({
      favoriteMovie: event.target.value
      })
    }
  
  handleOnClick = () => {
    let newFavoriteMovieArray = [
      ...this.state.favoriteMovieArr,
      {
        id: this.state.favoriteMovieArr.length + 1,
        name: this.state.favoriteMovie
      }
    ]
    this.setState({
      favoriteMovieArr: newFavoriteMovieArray,
      favoriteMovie:""
    })
  }

  render() {
    return (
      <div style = {style.divStyle} >
        <input 
          type = "text" 
          name="favoriteMovie" 
          value={this.state.favoriteMovie} 
          onChange={this.handleOnChange}/>
        <button type="submit" onClick={this.handleOnClick}>
          Submit
        </button>
        <AppChild
          item1 = {"I am item1"}
          isTrue = {true}
          favoriteMovieArr = {this.state.favoriteMovieArr}
        />
      </div>
    )
  }
}

function AppChild(props) {
  return(
  <div stye = {style.divStyle} >
    This is from a Child component
    <br /> Load data from the parent component
    <br />  
      {props.favoriteMovieArr.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
  </div>
  )
}

const style = {
  divStyle: {
    textAlign: "center",
    marginTop: 50,
  },
  buttonStyle: {
    width: 250,
    backgroundColor: "red",
  },
};