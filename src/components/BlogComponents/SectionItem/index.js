import React, { Component } from 'react';
import './sectionItem.scss';

export default class extends Component {
  render() {
    return(
      <div className="section-item">
        {this.props.children}
      </div>
    );
  }
}