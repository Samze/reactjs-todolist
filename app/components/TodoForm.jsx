var React = require('../../react/react.js');

var TodoForm = React.createClass({
    handleSubmit : function(e){
        e.preventDefault();

        var author = React.findDOMNode(this.refs.author).value.trim();
        var body = React.findDOMNode(this.refs.body).value.trim();

        if(!author || !body) {
            return;
        }

        var customEvent = new CustomEvent("react:newTodo", {
            detail : {
                author : author,
                body : body
            },
            bubbles : true
        });

        this.refs.blogForm.getDOMNode().dispatchEvent(customEvent);

        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.body).value = '';
    },
    componentWillMount : function(){
        window.addEventListener("react:newTodo", this.handleNewBlog, false);
    },
    componentWillUnmount : function(){
        window.removeEventListener("react:newTodo", this.handleNewBlog, false);
    },
    render : function(){
        return (
            <div className="TodoForm">
                <form ref="blogForm" id="blogForm" onSubmit={this.handleSubmit}>
                    <input type="text" className="formColour" ref="author" placeholder="your name..."/>
                    <textarea className="TodoFormTextArea formColour" ref="body" cols="1" rows="5" placeholder="...enter your entry here" form="blogForm" />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
});

module.exports = TodoForm;