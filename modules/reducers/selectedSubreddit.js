/**
 * Created by teodor on 21/02/17.
 */

import {
    SELECT_SUBREDDIT
} from '../actions'

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

export default selectedSubreddit