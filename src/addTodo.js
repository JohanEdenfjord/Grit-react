import { render } from "@testing-library/react";
import React, { Component } from "react";

class addTodo extends Component {
  render() {
    return (<form>
        <input type="text" name="title" placeholder="Add Todo..." />
        <input type="submit" value="submit" className="btn" style={{flex: 1}}/>
    </form>)
  }
}

export default addTodo;
