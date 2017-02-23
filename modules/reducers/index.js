import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import postsBySubreddit from "./postsBySubreddit";
import selectedSubreddit from "./selectedSubreddit";
import jobsByJenkins from "./jobsByJenkins";

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  todos,
  visibilityFilter,
  jobsByJenkins
})

export default rootReducer
