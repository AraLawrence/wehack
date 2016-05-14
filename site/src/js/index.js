var React = require('react');
var ReactDOM = require('react-dom');

const App = React.createClass({
  render() {
    return (
      <div>
        "Hello, Universe!"
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
