var React = require('react');

const Gif = React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.data}/>
      </div>
    )
  }
});

module.exports = Gif
