import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
/***************  1-add---constructor  初始值 */
  // 建構子，每個 class 第一次產生時都會執行到這邊
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, name: 'hello', completed: false},
        {id: 2, name: 'aaaaaa', completed: true},
        {id: 3, name: 'world', completed: false}
      ]
    }
  }

/***************  1-add---constructor  初始值 */   
  render() {
/***************  2-add---this.state */
    let myTodos = this.state.todos;
/***************  2-add---this.state */
    return (
/***************  3-add---換我們的html內容 */
     /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      <div>
        <ul>
          {
            myTodos.map((todo) => {
              // 傳回 jsx
              return (
                <li>
                  name:{todo.name}, {todo.completed ? '已完成' : ''}
                </li>
              );
            })
          }
        </ul>
      </div>
/***************  3-add---換我們的html內容 */
    );
  }
}

export default App;


