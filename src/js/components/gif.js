import React from 'react';
import Quote from './quote.js';
import {CardMedia, CardText} from 'material-ui/Card';

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
        <CardMedia>
          <img src={this.props.gif}
             onLoad={this.handleImageLoaded}/>
        </CardMedia>
        <CardText>
        <div className="col s6 center">
          <Quote data={this.state.quoteText}/>
        </div>
        </CardText>
      </div>
    )
  }
});

module.exports = Gif;
