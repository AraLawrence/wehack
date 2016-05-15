var React = require('react');

const Quote = React.createClass({
  render() {
    return (
      <div>
        <p>{this.props.data}</p>
      </div>
    )
  }
});

module.exports = Quote
