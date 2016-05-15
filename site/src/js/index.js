var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUI = require('material-ui');

const App = React.createClass({
  render() {
  	var style = {}
    return (
      <div>

      <div className="col s6 center">
      <img src={"https://media.giphy.com/media/3o7ZeoHrOtqif5U3Ek/giphy.gif"}/>
      </div>
      <div className="col s6 center">
        "Hello, Universe!"
      </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
