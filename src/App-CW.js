import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <ParentBook />
      </div>
    );
  }
}

class ParentBook extends Component {
  state = {
    bookListArray: [],
    bookValue: "",
  };

  handleOnChange = (event) => {
    this.setState({
      bookValue: event.target.value,
    });
  };

  handleOnClick = (event) => {
    let newBookListArray = [
      ...this.state.bookListArray,
      {
        id: this.state.bookListArray.length + 1,
        name: this.state.bookValue, //this is what we captured from the input
      },
    ];
    this.setState({
      bookListArray: newBookListArray,
      bookValue: "",
    });
  };

  render() {
    return (
      <div style={style.divStyle}>
        <input
          type="text"
          name="bookValue"
          value={this.state.bookValue}
          onChange={this.handleOnChange}
        />
        <br />
        <button style={style.buttonStyle} onClick={this.handleOnClick}>Submit</button>
        <ChildMovie
          name={"Child1-book"}
          movieListArray={this.state.bookListArray}
        />
      </div>
    );
  }
}

function ChildMovie(props) {
  return (
    <div>
      {" "}
      {props.bookListArray.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
}

ChildMovie.propTypes = {
  bookListArray: PropTypes.array,
};

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

// 1. create a state
// 2. create an array called movieListArray
// 3. create a state called movieValue
// 4. create an input to capture user value
// 5. create a submit button to submit user value
// 6. create a child component and pass the movieListArray to the child componenet
// 7. render the movieArrayList in the child component