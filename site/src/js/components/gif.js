import React from 'react';
import Quote from './quote.js';

const Gif = React.createClass({
  getInitialState() {
    return {
      quoteText: this.props.quote
    }
  },
  handleImageLoaded() {
    this.setState({quoteText: this.props.quote})
  },
  render() {
    return (
      <div>
        <img src={this.props.gif}
             onLoad={this.handleImageLoaded}/>
        <div className="col s6 center">
          <Quote data={this.state.quoteText}/>
        </div>
      </div>
    )
  }
});

module.exports = Gif;
