import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";
import "./Child1-ul.css";
export class Child1UL extends Component {
    state = {
        toggleInput: "",
    };
    handleToggleOnChange = (event) => {
        console.log(event.target.name, event.target.value);
        this.setState({
            toggleInput: event.target.value,
        })
    };

    handleToggleButton = (id, itemTodo) => {
        this.setState({
            toggleInput: itemTodo,
        })
        this.props.handleEditToggle(id)
        this.props.handleEditUpdateTodo(id, this.state.toggleInput)
    }
    render() {
        return (
            <ul>
                {this.props.todoList.map((item) => {
                    let strikeThroughClass = `${item.isDone ? "strike-through-isDone" : ""
                        }`;
                    return (
                        <React.Fragment key={item.id}>
                            {/* <li style={{ textDecoration: item.isDone ? "line-through" : "" }}> */}
                            {/* <li className={`${item.isDone ? "strike-through-isDone" : ""}`}> */}
                            {/* <li style={{ textDecoration: item.isDone && "line-through" }}> */}
                            {/* <li className={strikeThroughClass}>{item.todo}</li>{" "} */}
                            {item.isEditToggle ? (
                                <input
                                    value={this.state.toggleInput}
                                    style={{ marginRight: 10 }}
                                    onChange={this.handleToggleOnChange}
                                    name="toggleInput"
                                />
                            ) : (
                                    <li className={strikeThroughClass}>{item.todo}</li>
                                )}
                            <Button
                                propsClassName={"btn btn-success button-style"}
                                propsName={item.isEditToggle ? "Submit" : "Edit"}
                                propsOnClick={() => this.handleToggleButton(item.id, item.todo)}
                                propsButtonToggle={item.isButtonToggle}
                            />
                            <Button
                                propsClassName={"btn btn-warning button-style"}
                                propsOnClick={() => this.props.handleIsDone(item.id)}
                                propsName={"Done"}
                            />
                            <Button
                                propsClassName={"btn btn-danger button-style"}
                                propsOnClick={() => this.props.handleOnClick(item.id)}
                                propsName={"Delete"}
                                
                            />
            
                            <br />
                        </React.Fragment>
                    );
                })}
            </ul>
        );
    }
}
Child1UL.propTypes = {
    todoList: PropTypes.array.isRequired,
    handleIsDone: PropTypes.func.isRequired,
};
export default Child1UL;