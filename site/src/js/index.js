import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <div>
        "Hello, World!"
      </div>
    )
  }
});

render((
  <App />
), document.getElementById('site'));
