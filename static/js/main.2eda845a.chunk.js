(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(9),d=n.n(i),s=(n(15),n(7)),c=n(1),l=n(2),r=n(4),u=n(3),h=n(6),m=n(5),p=(n(16),function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"onChange",value:function(t){this.setState({title:t.currentTarget.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.addTodo(this.state.title),this.setState({title:""})}},{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit.bind(this),className:"adding-field"},a.a.createElement("input",{type:"text",className:"input input--main",name:"title",placeholder:"Add todo...",onChange:this.onChange.bind(this),value:this.state.title}),a.a.createElement("input",{type:"submit",name:"submit",value:"Add",className:"btn btn--add-todo"}))}}]),e}(o.Component)),b=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(r.a)(this,Object(u.a)(e).call(this))).state={editing:!1,changedTitle:""},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setState({changedTitle:this.props.todo.title})}},{key:"handleEditing",value:function(t){this.setState({editing:!0,changedTitle:this.props.todo.title})}},{key:"handleEditingDone",value:function(t){this.setState({editing:!1})}},{key:"handleEditingChange",value:function(t){var e=t.currentTarget.value;console.log(e),this.setState({changedTitle:e})}},{key:"getStyle",value:function(){return{textDecoration:this.props.todo.completed?"line-through":"none"}}},{key:"render",value:function(){var t=this.props.todo.id,e={},n={};return this.state.editing?e.display="none":n.display="none",a.a.createElement("li",{className:"item",style:this.getStyle()},a.a.createElement("div",{className:"item--done",style:e},a.a.createElement("div",{className:"task"},a.a.createElement("input",{type:"checkbox",onChange:this.props.markTodo.bind(this,t)}),this.state.changedTitle),a.a.createElement("div",{className:"manage-btns"},a.a.createElement("button",{className:"btn btn--edit",onClick:this.handleEditing.bind(this,t)},"edit"),a.a.createElement("button",{className:"btn btn--delete",onClick:this.props.delTodo.bind(this,t)},"delete"))),a.a.createElement("div",{className:"item--edit",style:n},a.a.createElement("input",{type:"text",className:"input input-editing",value:this.state.changedTitle,onChange:this.handleEditingChange.bind(this)}),a.a.createElement("input",{type:"submit",value:"Save",className:"btn btn--edit-done",onClick:this.handleEditingDone.bind(this)})))}}]),e}(o.Component),v=function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(b,{key:e.id,todo:e,markTodo:t.props.markTodo,delTodo:t.props.delTodo,editTodo:t.props.editTodo,saveTodo:t.props.saveTodo})}))}}]),e}(o.Component);var T=function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"Todo List"))},g=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).markTodo=function(t){return n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){n.setState({todos:Object(s.a)(n.state.todos.filter((function(e){return e.id!==t})))})},n.editTodo=function(t,e){return n.setState({todos:n.state.todos.map((function(e){return e.id===t&&console.log(),e}))})},n.addTodo=function(t){var e={id:n.state.todos.length+1,title:t,completed:!1,editState:!1};console.log(e,n.state.todos),n.setState({todos:[].concat(Object(s.a)(n.state.todos),[e])})},n.state={todos:[]},n.addTodo=n.addTodo.bind(Object(h.a)(n)),n.markTodo=n.markTodo.bind(Object(h.a)(n)),n.delTodo=n.delTodo.bind(Object(h.a)(n)),n.editTodo=n.editTodo.bind(Object(h.a)(n)),n}return Object(m.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(T,null),a.a.createElement(p,{addTodo:this.addTodo}),a.a.createElement(v,{todos:this.state.todos,markTodo:this.markTodo,delTodo:this.delTodo,editTodo:this.editTodo,saveTodo:this.saveTodo}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.2eda845a.chunk.js.map