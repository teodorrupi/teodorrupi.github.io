/**
 * Created by teodor on 21/02/17.
 */

import {
    REQUEST_JOBS, RECEIVE_JOBS, ADD
} from '../actions'

/*
 The reducer is a pure function that takes the previous state and an action, and returns the next state.
 (previousState, action) => newState
 */

const initialState = {
    isFetching: false,
    items: []
};

function jobs(state, action) {
    switch (action.type) {
        case REQUEST_JOBS:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE_JOBS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.jobs,
                lastUpdated: action.receivedAt
            })
        case ADD:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.jobs
            })
        default:
            return initialState
    }
}

function jobsByJenkins(state = { }, action) {
    switch (action.type) {
        case RECEIVE_JOBS:
        case REQUEST_JOBS:
            return Object.assign({}, state, {
                [action.test]: jobs(state[action.test], action)
            })
        case ADD:
            return Object.assign({}, state, {
                [action.test]: jobs(state[action.test], action)
            })
        default:
            return state
    }
}

export default jobsByJenkins