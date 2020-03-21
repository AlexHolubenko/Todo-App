import React, {Component} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Header from './layout/Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }
  markTodo = (id) => (
    this.setState({ todos: this.state.todos.map((todo)=>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  )
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  editTodo = (id, e) => (
    this.setState({ todos: this.state.todos.map((todo)=>{
      if(todo.id === id) {
        console.log()
        
      }
      return todo;
    })})
  )
  addTodo = (title) => {
    const oldLength = this.state.todos.length;
    const todo = {
      id: oldLength + 1,
      title: title,
      completed: false,
      editState: false
    }

    console.log(todo, this.state.todos);
    this.setState({todos: [...this.state.todos, todo]});
  }

  render() {
    return (
      <div className="App">
      <Header />
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markTodo={this.markTodo} delTodo={this.delTodo} editTodo={this.editTodo} saveTodo={this.saveTodo}/>
      </div>
    );
  }
}

export default App;
