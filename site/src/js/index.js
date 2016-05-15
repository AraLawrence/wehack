import React from 'react';
import { render } from 'react-dom';

import Gif from './components/gif.js';

const App = React.createClass({
  getInitialState() {
    let quoteText, gifUrl;
    return {
      quoteText: "Hello, Universe",
      gifUrl: "https://media.giphy.com/media/3o7ZeoHrOtqif5U3Ek/giphy.gif"
    }
  },
  getGif() {
    $.get("http://localhost:3000/api/gif", (data) => {
      this.gifUrl = data.data.images.original.url;
      this.setState({quoteText: this.quoteText, gifUrl: this.gifUrl});
    });
  },
  getQuote() {
    $.get("http://localhost:3000/api/quote", (data) => {
      this.quoteText = data.quote;
      this.getGif();
    });
  },
  handleClick() {
    this.getQuote();
  },
  render() {
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

render(<App />, document.getElementById('app'));
