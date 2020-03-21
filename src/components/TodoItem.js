import React, {Component} from 'react';

class TodoItem extends Component {
 constructor(){
   super();
   this.state = {editing: false, changedTitle: '' }
 }
componentDidMount(){
  this.setState({
    changedTitle: this.props.todo.title
  })
}
 handleEditing(e){
   this.setState({editing: true, changedTitle: this.props.todo.title});
 }
 handleEditingDone(e){
    this.setState({editing: false});
 }
 handleEditingChange(e){
   let _changed = e.currentTarget.value;
   console.log(_changed);
   this.setState({changedTitle: _changed});
}
 getStyle() {
  return {
   textDecoration: this.props.todo.completed ? 'line-through' : 'none'
  }
 }

 render(){
  const { id} = this.props.todo;
  let veiwStyle = {};
  let editStyle = {};

  if(this.state.editing){
    veiwStyle.display = 'none'
  } else {
    editStyle.display = 'none'
  }
  
  return (
   <div style={this.getStyle()}>
     <div className="item--done" style={veiwStyle}>
      <input type="checkbox" onChange={this.props.markTodo.bind(this, id)}/>
      {this.state.changedTitle}
      <button onClick={this.handleEditing.bind(this, id)}>edit</button> 
      <button onClick={this.props.delTodo.bind(this, id)}>delete</button>
     </div>
     <div className="item--edit" style={editStyle}>
      <input type="text"  value={this.state.changedTitle} onChange={this.handleEditingChange.bind(this)}/>
      <input type="submit" onClick={this.handleEditingDone.bind(this)} />
     </div> 
   </div>
  )
 }
}

export default TodoItem;