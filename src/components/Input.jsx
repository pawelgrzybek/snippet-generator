import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="app__half">

        <div className="app__top">
          <div className="app__topitem">
            <input type="text" className="input" placeholder="Descrption…" defaultValue={this.props.description} onChange={this.props.updatedescription}/>
          </div>
          <div className="app__topitem">
            <input type="text" className="input" placeholder="Tab trigger…" defaultValue={this.props.tabtrigger} onChange={this.props.updatetabtrigger}/>
          </div>
        </div>

        <div className="app__main">
          <textarea
            className="input"
            placeholder="Your snippet…"
            defaultValue={this.props.snippet}
            onChange={this.props.updatesnippet}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          >
          </textarea>
        </div>

      </div>
    );
  }
}

export default Input;
