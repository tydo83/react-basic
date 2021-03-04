import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Child1-ul.css"
import Button from './common/Button'

function Child1UL(props) {
    return (
            <div>
                <ul>
                    {props.todoList.map((item) => {
                        return (
                            <React.Fragment key={item.id}>
                                {/* <li style = {{ textDecoration: item.isDone ? "line-through" : ""}}> */}
                                {/* <li className={`${item.isDone ? "strike-through-isDone" : ""}`}>    */}
                                    {
                                        item.isEditToggle ? (
                                    <input style={{marginRight: 10}} value={item.todo}/>)
                                        : (
                                    <li className={`${item.isDone ? "strike-through-isDone" : ""}`}>  
                                        {item.todo}
                                    </li>)
                                    }
                                    
                                <Button
                                    propsClassName={"btn btn-success button-style"}
                                    propsName={"Edit"}
                                    propsOnClick={()=>props.handleEditToggle(item.id)}
                                />
                                <Button
                                    propsClassName={"btn btn-warning button-style"}
                                    propsOnClick={() => props.handleIsDone(item.id)} 
                                    propsName={"Done"}
                                />
                                    <Button
                                    propsClassName={"btn btn-danger button-style"}
                                    propsOnClick={() => props.handleOnClick(item.id)} 
                                    propsName={"Delete"}
                                />
                                {/* <button 
                                    className="btn btn-warning button-style"
                                    onClick={() => props.handleIsDone(item.id)} 
                                >Done</button>
                                <button
                                    className="btn btn-danger button-Style"
                                    onClick={() => props.handleOnClick(item.id)}
                                >Delete</button> */}
                                <br />
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
    )
}

Child1UL.propTypes = {
    todoList: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    handleIsDone: PropTypes.func.isRequired,
}
            
export default Child1UL
