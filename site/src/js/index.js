var React = require('react');
var ReactDOM = require('react-dom');
var MaterialUI = require('material-ui');

var Gif = require('./components/gif.js');

const App = React.createClass({
  getInitialState: function() {
    return {
      quoteText: "hello",
      gifUrl: "https://media.giphy.com/media/3o7ZeoHrOtqif5U3Ek/giphy.gif"
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
    console.log("handling click");
    this.getQuote();

  },

  render() {
  	var quoteText, gifUrl;
    return (
      <div>
        <div className="col s6 center">
          <Gif gif={this.state.gifUrl} quote={this.state.quoteText}/>
          <div className="btn" onClick={this.handleClick}>Experience the Science</div>
        </div>
        <div style={{textAlign: 'center', marginTop: '16px'}}>
          <div className="fb-like" data-href="https://fakedomainfornow.com" data-width="290" data-layout="standard" data-action="like" data-show-faces="false" data-share="true"></div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
