import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child2Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmitTodo}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Enter Todo
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Todo"
                            name="inputTodo"
                            value={this.props.inputTodo}
                            onChange={this.props.handleOnChange}
                        />
                        <button className="btn btn-primary mb-3" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

Child2Form.propTypes = {
    handleSubmitTodo: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    inputTodo: PropTypes.string.isRequired,
}

export default Child2Form

