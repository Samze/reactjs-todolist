var React = require('../react/react.js');
var TodoComponent = require('./components/TodoComponent.jsx')

// window.app = (function(scope){
//  return React.render(
//      <BlogComponent />,
//      document.getElementById('content')
//  );
// })();

React.render(
        <TodoComponent url="todoData.json" />,
        document.getElementById('content')
);