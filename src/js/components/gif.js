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
        <CardMedia style={{width:"75%", height:"auto", margin:"0 auto"}}>
          <img src={this.props.gif}
             onLoad={this.handleImageLoaded}/>
        </CardMedia>
        <CardText>
        <div>
          <Quote data={this.state.quoteText}/>
        </div>
        </CardText>
      </div>
    )
  }
});

module.exports = Gif;
