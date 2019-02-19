import React, { Component } from 'react';

export default class Text extends Component {
    render() {
        const spanStyles = {
            color: this.props.color
        }
        return <h1>Hello, <span style={spanStyles} > {this.props.children}</span></h1>
    }
}