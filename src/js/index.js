import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';

import Gif from './components/gif.js';

const App = React.createClass({
  getInitialState() {
    let quoteText, gifUrl;
    return {
      quoteText: "Hello, Universe!",
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
    let styles = {
      // background: "url(../static/space1.jpg)",
      height: "100vh",
      fontFamily: "Roboto"
    }
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={styles}>
          <Card style={{width:"70%", margin:"auto"}}>
            <CardHeader
              avatar="../static/assets/neil-circle.png"
              />
            <div style={{textAlign: 'center'}}>
              <Gif gif={this.state.gifUrl} quote={this.state.quoteText}/>
              <div>
                <RaisedButton onClick={this.handleClick}
                    labelColor="white" backgroundColor="#4db6ac"
                    label="Experience the Science" style={{marginBottom:"5%"}}/>
                <LinearProgress mode="indeterminate" />
              </div>
            </div>
          </Card>

          <div style={{textAlign: 'center', margin: '5%'}}>
            <div className="fb-like" data-href="https://fakedomainfornow.com" data-width="290" data-layout="standard" data-action="like" data-show-faces="false" data-share="true"></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
});

render(<App />, document.getElementById('app'));
