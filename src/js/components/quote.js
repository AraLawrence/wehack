import React from 'react';

const Quote = React.createClass({
  render() {
    return (
      <div>
        <p className="quote-text">"{this.props.data}"</p>
      </div>
    )
  }
});

module.exports = Quote
