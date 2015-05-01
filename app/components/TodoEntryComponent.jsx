var React = require('../../react/react.js');

var TodoEntryComponent = React.createClass({
	handleClick : function(e) {
		var customEvent = new CustomEvent("react:removeTodo", {
			detail : {
				id : this.props.todoId
			},
			bubbles : true
		});

    	this.refs.TodoEntryComponent.getDOMNode().dispatchEvent(customEvent);
	},
	render : function() {
		return (
			<div ref="TodoEntryComponent" className="TodoEntryComponent">
				<div className="TodoSide">
					<span className="TodoDate"> {this.props.date} </span>
					<button onClick={this.handleClick} className="TodoRemove">X</button>
				</div>
				<div className="TodoAuthor"> by {this.props.author} </div>
				<div className="TodoBody"> {this.props.body} </div>
			</div>
		)
	}
});

module.exports = TodoEntryComponent;