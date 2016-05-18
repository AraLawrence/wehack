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
      gifUrl: "https://media.giphy.com/media/3o7ZeoHrOtqif5U3Ek/giphy.gif",
      loading: "hidden"
    }
  },
  getGif() {
    fetch('/api/gif').then((res) => res.json())
    .then((resText) => {
      this.gifUrl = resText.data.data.images.original.url;
      this.setState({quoteText: this.quoteText, gifUrl: this.gifUrl, loading: "hidden"});
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
    this.setState({loading: 'visible'});
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
          <Card style={{width:"80%", margin:"auto", marginTop:"5%"}}>
            <CardHeader style={{borderBottom:"2px solid #00838f"}}
              avatar="../static/assets/neil-circle.png"
              title="Neil deGrasse Tyson"
              subtitle="Words of Wisdom"
              />
            <div style={{textAlign: 'center', paddingTop:"5%"}}>
              <Gif gif={this.state.gifUrl} quote={this.state.quoteText}/>
              <div>
                <RaisedButton onClick={this.handleClick}
                    labelColor="white" backgroundColor="#4db6ac"
                    label="Experience the Science" style={{marginBottom:"5%"}}/>
                  <div style={{visibility: this.state.loading}}>
                    <LinearProgress mode="indeterminate" />
                  </div>
              </div>
            </div>
          </Card>
          <div style={{textAlign: 'center', margin: '5%', paddingTop:"12px", paddingBottom:"6px"}}>
            <div className="fb-like" data-href="https://experiencethescience.com" data-width="290" data-layout="standard" data-action="like" data-show-faces="false" data-share="true"></div>
            <div><a href="https://github.com/AraLawrence/wehack" target="_blank"><img style={{width:"50px", height:"auto", paddingTop:"15px"}}
                    src="../static/assets/github-logo.png"></img></a></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
});

render(<App />, document.getElementById('app'));
