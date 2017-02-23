/**
 * Created by teodor on 23/02/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addIfNeeded } from '../actions/.'

let Add = ({dispatch}) => {
    let input

    return (
        <form onSubmit={e => {
            e.preventDefault()
            dispatch(addIfNeeded(input.value))
        }}>
            <input type="text" ref={text => {input = text;}}/>
            <button type="submit">Add</button>
        </form>
    )

};

Add = connect () (Add);
export default Add