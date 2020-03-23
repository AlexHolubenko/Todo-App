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
   <li className="item" style={this.getStyle()}>
     <div className="item--done" style={veiwStyle}>
      <div className="task">
          <input type="checkbox" onChange={this.props.markTodo.bind(this, id)}/>
        {this.state.changedTitle}
      </div>
      <div className="manage-btns">
        <button className="btn btn--edit" onClick={this.handleEditing.bind(this, id)}>edit</button> 
        <button className="btn btn--delete" onClick={this.props.delTodo.bind(this, id)}>delete</button>
      </div>
      
     </div>
     <div className="item--edit" style={editStyle}>
      <input type="text" className="input input-editing" value={this.state.changedTitle} onChange={this.handleEditingChange.bind(this)}/>
      <input type="submit" value="Save" className="btn btn--edit-done" onClick={this.handleEditingDone.bind(this)} />
     </div> 
   </li>
  )
 }
}

export default TodoItem;