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
     name="title"
     placeholder="Add todo..."
     onChange={this.onChange.bind(this)} 
     value={this.state.title}/>
     <input 
      type="submit"
      name="submit"
      />
   </form>
  )
 }
}
export default AddTodo;