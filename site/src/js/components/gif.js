var React = require('react');
var Quote = require('./quote.js');

const Gif = React.createClass({
  getInitialState: function() {
    return {
      quoteText: this.props.quote
    }
  },

  handleImageLoaded: function() {
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

module.exports = Gif
