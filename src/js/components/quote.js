import React from 'react';

const Quote = React.createClass({
  render() {
    let quoteStyle = {
      fontSize: "20px"
    }
    return (
      <div>
        <p style={quoteStyle}>"{this.props.data}"</p>
      </div>
    )
  }
});

module.exports = Quote
