var React = require('../../react/react.js');
var TodoEntryComponent = require('./TodoEntryComponent.jsx');
var TodoForm = require('./TodoForm.jsx');

var TodoListComponent = React.createClass({
    render : function() {

        var TodoList = this.props.data.map(function(Todo){
            return (
                <TodoEntryComponent todoId={Todo.id} author={Todo.author} date={Todo.date} body={Todo.body}/>
            );
        });

        return (
            <div className="TodoListComponent">
                <h3> TodosList </h3>
                {TodoList}
                <TodoForm />
            </div>
        )
    }
});

module.exports = TodoListComponent;