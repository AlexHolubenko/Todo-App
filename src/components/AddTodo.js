import React, {Component} from 'react';

class AddTodo extends Component {
 state = {
  title: ''
 }
 onChange(e){
  this.setState({title: e.currentTarget.value})
 }
 onSubmit(e){
  e.preventDefault();
  this.props.addTodo(this.state.title);
  this.setState({title: ''});
 }
 render(){
  return (
   <form onSubmit={this.onSubmit.bind(this)} className="adding-field"> 
    <input 
     type="text"
     className="input input--main"
     name="title"
     placeholder="Add todo..."
     onChange={this.onChange.bind(this)} 
     value={this.state.title}/>
     <input 
      type="submit"
      name="submit"
      value="Add"
      className="btn btn--add-todo"
      />
   </form>
  )
 }
}
export default AddTodo;