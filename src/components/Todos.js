import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class Todos extends Component {
 render(){
  return this.props.todos.map((todo)=>(
   <TodoItem 
     key={todo.id} 
     todo={todo} 
     markTodo={this.props.markTodo} 
     delTodo={this.props.delTodo}
     editTodo={this.props.editTodo}
     saveTodo={this.props.saveTodo} />
  ));
 }
}
export default Todos;