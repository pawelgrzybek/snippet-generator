import React, { Component } from 'react';

class SublimeText extends Component {
  render() {
    return (
      <pre className="pre">
        sublime text logic  here...

        {this.props.snippet}
      </pre>
    );
  }
}

export default SublimeText;
