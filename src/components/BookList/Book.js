import React, { Component } from 'react'

export default class Book extends Component {
    
    render() {
        console.log(this.props);
        return (
            <tr>
                <th>{this.props.title}</th>
                <th>{this.props.author}</th>
                <th>{this.props.year}</th>
            </tr>
        )
    }
}
