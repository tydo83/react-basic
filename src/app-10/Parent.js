import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Child1UL from './Child1-ul'
import Child2Form from './Child2-form'
import "./Parent.css";

class Parent extends Component {
    state = {
        todoList: [
            {
                id: uuidv4(),
                todo: "walk the dog",
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false,
            },
            {
                id: uuidv4(),
                todo: "buy milk",
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false,
            },
            {
                id: uuidv4(),
                todo: "wash dishes",
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false,
            },
        ],
        inputTodo: ""
    };

    handleSubmitTodo = (event) => {
        event.preventDefault();
        let newArr = [
            ...this.state.todoList,
            {
                id: uuidv4(),
                todo: this.state.inputTodo,
                isDone: false,
                isEditToggle: false,
            }
        ]
        this.setState({
            todoList: newArr,
            inputTodo: "",
        })
    }

    handleOnChange = (event) => {
        this.setState({
            inputTodo: event.target.value
        })
    }

    handleOnClick = (itemID) => {
        let filteredArr = this.state.todoList.filter((item) => {
            if (item.id !== itemID) {
                item.isButtonToggle = false;
                return item;
            }
        })
        this.setState({
            todoList: filteredArr
        })
    }

    handleIsDone = (itemID) => {
        let mappedArr = this.state.todoList.map((item) => {
            if (item.id === itemID) {
                item.isDone = !item.isDone
            }
            return item
        })

        this.setState({
            todoList: mappedArr
        })
    }

    handleEditToggle = (itemID) => {

        let mappedArr = this.state.todoList.map((item) => {
            if (item.id === itemID) {
                item.isEditToggle = !item.isEditToggle
            }
            if (item.id !== itemID) {
                item.isButtonToggle = !item.isButtonToggle
            }
            return item
        })

        this.setState(({
            todoList: mappedArr,
        }))
    }

    handleEditUpdateTodo = (id, newTodoItem) => {
        let updatedTodoItem = this.state.todoList.map((item) => {
            if (item.id === id) {
                item.todo = newTodoItem
            }
            return item;
        })

        this.setState({
            todoList: updatedTodoItem,
        })
    }

    render() {
        return (
            <div className="parent-container">
                <Child2Form
                    handleSubmitTodo={this.handleSubmitTodo}
                    inputTodo={this.state.inputTodo}
                    handleOnChange={this.handleOnChange}
                />
                <Child1UL
                    todoList={this.state.todoList}
                    handleOnClick={this.handleOnClick}
                    handleIsDone={this.handleIsDone}
                    handleEditToggle={this.handleEditToggle}
                    handleEditUpdateTodo={this.handleEditUpdateTodo}
                />
            </div>
        );
    }
}
export default Parent;