import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    isLoading: true,
    giphyArray: []
  }

  async componentDidMount() {
    try {
      let result = await axios.get(
        `http://api.giphy.com/v1/gifs/search?api_key=YvYvAYt7XWe44u1KVvUG0wEW4xTqHZtz&q=hamster`
      )
      this.setState({
        giphyArray: result.data.data,
        isLoading: false,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
      <ChildComponent
        name={"Hamsters"}
        isLoading={this.state.isLoading}
        giphyArray={this.state.giphyArray}
      />
      </div>
    )
  }
}

function ChildComponent(props) {
  return (
    <div>
      {props.isLoading ?
        (<div>...isLoading</div>)
        :
        <div className="container">
          <div className="row">
            {
              props.giphyArray.map((item) => {
                return <div className="col-sm-6" key={item.id}>
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <img src={item.images.fixed_width_still.url} />
                      </div>
                    </div>
                  </div>
                </div>
              })}
          </div>
        </div>
      }
    </div>
  )
}
