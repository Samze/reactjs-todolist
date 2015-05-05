var React = require('../react/react.js');
var TodoComponent = require('./components/TodoComponent.jsx')

React.render(
        <TodoComponent url="todoData.json" />,
        document.getElementById('content')
);