import React from 'react';
// import { Component } from 'react'


class ElButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button style={ {background: this.props.bgColor} }>{ this.props.children }</button>
    )
  }
}

export default ElButton;
