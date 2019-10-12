import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxCharacters: ''
  }
}

  handleCharacterChange = event => {
    this.setState({
      maxCharacters: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.maxCharacters} onChange={this.handleCharacterChange} />
        <p> Remaining characters: {this.props.maxChars - this.state.maxCharacters.length }</p>
      </div>
    );
  }
}

export default TwitterMessage;
