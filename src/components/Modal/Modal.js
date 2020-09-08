import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = ({ code }) => {
    if (code === 'Escape') this.props.onClose();
  };

  handleMouseClick = ({ target }) => {
    if (target.className === 'Overlay') this.props.onClose();
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleMouseClick}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
