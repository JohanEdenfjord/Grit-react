import { render } from '@testing-library/react'
import React, { Component } from 'react'

class addTodo extends Component {
    render() {
    return (
        <input type="text" name="title" placeholder="Add Todo..."/>
    )
    }
}  

export default addTodo;
