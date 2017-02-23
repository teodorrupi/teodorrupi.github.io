import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export const ADD = 'ADD';

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

function requestJobs() {
  return {
    type: REQUEST_JOBS,
    test: 'test'
  }
}

function receiveJobs(json) {
  return {
    type: RECEIVE_JOBS,
    test: 'test',
    jobs: json.jobs,
    receivedAt: Date.now()
  }
}

function fetchJobs() {
  return dispatch => {
    dispatch(requestJobs());
    return fetch(`https://jenkins.mono-project.com/api/json`)
        .then(response => response.json())
        .then(json => dispatch(receiveJobs(json)))
  }
}

function shouldFetchJobs(state) {
  const jobs = state.jobsByJenkins['test']
  if(!jobs) {
    return true;
  } else if (jobs.isFetching) {
    return false;
  } else {
    return false;
  }
}

export function fetchJobsIfNeeded(){
  return (dispatch, getState) => {
    if (shouldFetchJobs(getState())) {
      return dispatch(fetchJobs())
    }
  }
}

let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export function add(state, text) {
  const arr = new Array({_class:"hudson.matrix.MatrixProject", color:"blue", name:text, url:"https://jenkins.mono-project.com/job/build-package-dpkg-llvm/}"})
    return {
      type: ADD,
      test: 'test',
      jobs: [].concat(arr, state.jobsByJenkins.test.items),
      receivedAt: Date.now()
    }
}

export function addIfNeeded(text){
  return (dispatch, getState) => {
      return dispatch(add(getState(), text));
  }
}
