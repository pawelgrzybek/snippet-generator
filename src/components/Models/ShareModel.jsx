import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShareModel extends Component {

  getShareableLink() {
    const shareUrl = new URL(window.location.href);
    shareUrl.searchParams.set('desc', this.props.description);
    shareUrl.searchParams.set('tt', this.props.tabtrigger);
    shareUrl.searchParams.set('snippet', this.props.snippet);
    return shareUrl.href;
  }

  render() {
    return (
      <div className={`app--model app--model__${this.props.show}`}>
        <div className="share-model">
          <div>
            <span className="close-btn" onClick={e => this.props.onClose(e)} />
            <div className="share-container">
              <label htmlFor="share-link" className="share-link-label">copy below link to share the snippet</label>
              <textarea name="share-link" id="" cols="30" rows="10" readOnly value={this.getShareableLink()} className="share-link" />
            </div>
          </div>
        </div>
        <div className="app--model-background" />
      </div>
    );
  }

}

ShareModel.propTypes = {
  show: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  tabtrigger: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
};

export default ShareModel;

