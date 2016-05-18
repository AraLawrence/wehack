import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Gif from './components/gif.js';

const App = React.createClass({
  getInitialState() {
    let quoteText, gifUrl;
    return {
      quoteText: "Hello, World!",
      gifUrl: "https://media.giphy.com/media/3o7ZeoHrOtqif5U3Ek/giphy.gif"
    }
  },
  getGif() {
    fetch('/api/gif').then((res) => res.json())
    .then((resText) => {
      this.gifUrl = resText.data.data.images.original.url;
      this.setState({quoteText: this.quoteText, gifUrl: this.gifUrl});
    });
  },
  getQuote() {
    fetch('/api/quote').then((res) => res.json())
    .then((resText) => {
      this.quoteText = resText.quote;
      this.getGif();
    });
  },
  handleClick() {
    this.getQuote();
  },
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{fontFamily:'roboto'}}>
          <div style={{textAlign: 'center'}}>
            <Gif gif={this.state.gifUrl} quote={this.state.quoteText}/>
            <RaisedButton onClick={this.handleClick}
                          labelColor="white" backgroundColor="#4db6ac"
                          label="Experience the Science" />
          </div>
          <div style={{textAlign: 'center', marginTop: '16px'}}>
            <div className="fb-like" data-href="https://fakedomainfornow.com" data-width="290" data-layout="standard" data-action="like" data-show-faces="false" data-share="true"></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
});

render(<App />, document.getElementById('app'));
