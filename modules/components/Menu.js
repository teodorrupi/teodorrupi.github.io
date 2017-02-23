/**
 * Created by teodor on 23/02/17.
 */
import React, { PropTypes, Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item, i) =>
                    <li key={i}> {item} </li>
                )}
            </ul>
        )
    }
}

Menu.propTypes = {
    posts: PropTypes.array.isRequired
}