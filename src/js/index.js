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
      quoteText: "Hello, Universe",
      gifUrl: "https://media.giphy.com/media/3o7ZeoHrOtqif5U3Ek/giphy.gif"
    }
  },
  getGif() {
    $.get("/api/gif", (data) => {
      this.gifUrl = data.data.data.images.original.url;
      this.setState({quoteText: this.quoteText, gifUrl: this.gifUrl});
    });
  },
  getQuote() {
    $.get("/api/quote", (data) => {
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
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <RaisedButton onClick={this.handleClick} backgroundColor="#a4c639" label="Experience the Science" />
          </MuiThemeProvider>
        </div>
        <div style={{textAlign: 'center', marginTop: '16px'}}>
          <div className="fb-like" data-href="https://fakedomainfornow.com" data-width="290" data-layout="standard" data-action="like" data-show-faces="false" data-share="true"></div>
        </div>
      </div>
    )
  }
});

render(<App />, document.getElementById('app'));
