import React, { Component } from 'react'

export default class Boil extends Component {
    render() {
        if (this.props.cel >= 100) {
            return (
                <p>The water would boil.</p>
            );
        }return (
            <div>
                <p>The water would not boil.</p>
            </div>
        )
    }
}
