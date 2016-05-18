var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUI = require('material-ui');

var Quote = require('./components/quote.js');
var Gif = require('./components/gif.js');

const App = React.createClass({
  getInitialState: function() {
    return {
      quoteText: "hello",
      gifUrl: "../neillogo.png"
    }
  },

  getGif: function() {
    var self = this;
    console.log("second api call");
    $.get("http://localhost:3000/api/gif", function(data) {
      gifUrl = data.data.images.original.url;
      self.setState({quoteText: quoteText, gifUrl: gifUrl});
    });
  },

  getQuote: function() {
    var self = this;
    $.get("http://localhost:3000/api/quote", function(data) {
      quoteText = data.quote;
      self.getGif();
    });
  },

  handleClick: function() {
    this.getQuote();

  },

  render() {
  	var quoteText, gifUrl;
    return (
      <div>
        <div className="col s6 center">
        <Gif data={this.state.gifUrl}/>
        </div>
        <div className="col s6 center">
        <div className="container">
          <Quote data={this.state.quoteText}/>
          <div className="btn" onClick={this.handleClick}>Experience the Science</div>
        </div>
      </div>

      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
