/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(28);
	var compression = __webpack_require__(29);
	var path = __webpack_require__(30);
	// we'll use this to render our app to an html string

	// and these to match the url to routes and then render


	var app = express();
	app.use(compression());

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, 'public')));

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/main.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(7);

	var _About2 = _interopRequireDefault(_About);

	var _Repos = __webpack_require__(18);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(19);

	var _Repo2 = _interopRequireDefault(_Repo);

	var _Home = __webpack_require__(20);

	var _Home2 = _interopRequireDefault(_Home);

	var _AsyncApp = __webpack_require__(21);

	var _AsyncApp2 = _interopRequireDefault(_AsyncApp);

	var _JenkinsApp = __webpack_require__(24);

	var _JenkinsApp2 = _interopRequireDefault(_JenkinsApp);

	var _Jira = __webpack_require__(27);

	var _Jira2 = _interopRequireDefault(_Jira);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/repos', component: _Repos2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName/:repoName', component: _Repo2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/AsyncApp', component: _AsyncApp2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/JenkinsApp', component: _JenkinsApp2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/Jira', component: _Jira2.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        'App'
	      ),
	      _react2.default.createElement(
	        'ul',
	        { role: 'nav', className: 'inline-menu' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/', onlyActiveOnIndex: true },
	            'Home'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/about' },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos' },
	            'Repos'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/asyncApp' },
	            'AsyncApp'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/jenkinsApp' },
	            'JenkinsApp'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/jira' },
	            'Jira'
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = __webpack_require__(8);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AddTodo = __webpack_require__(14);

	var _AddTodo2 = _interopRequireDefault(_AddTodo);

	var _VisibleTodoList = __webpack_require__(15);

	var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Root from './containers/Root'

	exports.default = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'About'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'This is the content of about page in a paragraph tag. This section should be visible below the common navigation system.'
	      ),
	      _react2.default.createElement(_AddTodo2.default, null),
	      _react2.default.createElement(_VisibleTodoList2.default, null),
	      _react2.default.createElement(_Footer2.default, null)
	    );
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FilterLink = __webpack_require__(9);

	var _FilterLink2 = _interopRequireDefault(_FilterLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = function Footer() {
	  return _react2.default.createElement(
	    'p',
	    null,
	    'Show:',
	    " ",
	    _react2.default.createElement(
	      _FilterLink2.default,
	      { filter: 'SHOW_ALL' },
	      'All'
	    ),
	    ", ",
	    _react2.default.createElement(
	      _FilterLink2.default,
	      { filter: 'SHOW_ACTIVE' },
	      'Active'
	    ),
	    ", ",
	    _react2.default.createElement(
	      _FilterLink2.default,
	      { filter: 'SHOW_COMPLETED' },
	      'Completed'
	    )
	  );
	};

	exports.default = Footer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(10);

	var _ = __webpack_require__(11);

	var _Link = __webpack_require__(13);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    active: ownProps.filter === state.visibilityFilter
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onClick: function onClick() {
	      dispatch((0, _.setVisibilityFilter)(ownProps.filter));
	    }
	  };
	};

	var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);

	exports.default = FilterLink;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleTodo = exports.setVisibilityFilter = exports.addTodo = exports.ADD = exports.RECEIVE_JOBS = exports.REQUEST_JOBS = exports.INVALIDATE_SUBREDDIT = exports.SELECT_SUBREDDIT = exports.RECEIVE_POSTS = exports.REQUEST_POSTS = undefined;
	exports.selectSubreddit = selectSubreddit;
	exports.invalidateSubreddit = invalidateSubreddit;
	exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
	exports.fetchJobsIfNeeded = fetchJobsIfNeeded;
	exports.add = add;
	exports.addIfNeeded = addIfNeeded;

	var _isomorphicFetch = __webpack_require__(12);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS';
	var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';
	var SELECT_SUBREDDIT = exports.SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
	var INVALIDATE_SUBREDDIT = exports.INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

	var REQUEST_JOBS = exports.REQUEST_JOBS = 'REQUEST_JOBS';
	var RECEIVE_JOBS = exports.RECEIVE_JOBS = 'RECEIVE_JOBS';

	var ADD = exports.ADD = 'ADD';

	function selectSubreddit(subreddit) {
	  return {
	    type: SELECT_SUBREDDIT,
	    subreddit: subreddit
	  };
	}

	function invalidateSubreddit(subreddit) {
	  return {
	    type: INVALIDATE_SUBREDDIT,
	    subreddit: subreddit
	  };
	}

	function requestPosts(subreddit) {
	  return {
	    type: REQUEST_POSTS,
	    subreddit: subreddit
	  };
	}

	function receivePosts(subreddit, json) {
	  return {
	    type: RECEIVE_POSTS,
	    subreddit: subreddit,
	    posts: json.data.children.map(function (child) {
	      return child.data;
	    }),
	    receivedAt: Date.now()
	  };
	}

	function fetchPosts(subreddit) {
	  return function (dispatch) {
	    dispatch(requestPosts(subreddit));
	    return (0, _isomorphicFetch2.default)('https://www.reddit.com/r/' + subreddit + '.json').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receivePosts(subreddit, json));
	    });
	  };
	}

	function shouldFetchPosts(state, subreddit) {
	  var posts = state.postsBySubreddit[subreddit];
	  if (!posts) {
	    return true;
	  } else if (posts.isFetching) {
	    return false;
	  } else {
	    return posts.didInvalidate;
	  }
	}

	function fetchPostsIfNeeded(subreddit) {
	  return function (dispatch, getState) {
	    if (shouldFetchPosts(getState(), subreddit)) {
	      return dispatch(fetchPosts(subreddit));
	    }
	  };
	}

	function requestJobs() {
	  return {
	    type: REQUEST_JOBS,
	    test: 'test'
	  };
	}

	function receiveJobs(json) {
	  return {
	    type: RECEIVE_JOBS,
	    test: 'test',
	    jobs: json.jobs,
	    receivedAt: Date.now()
	  };
	}

	function fetchJobs() {
	  return function (dispatch) {
	    dispatch(requestJobs());
	    return (0, _isomorphicFetch2.default)('https://jenkins.mono-project.com/api/json').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receiveJobs(json));
	    });
	  };
	}

	function shouldFetchJobs(state) {
	  var jobs = state.jobsByJenkins['test'];
	  if (!jobs) {
	    return true;
	  } else if (jobs.isFetching) {
	    return false;
	  } else {
	    return false;
	  }
	}

	function fetchJobsIfNeeded() {
	  return function (dispatch, getState) {
	    if (shouldFetchJobs(getState())) {
	      return dispatch(fetchJobs());
	    }
	  };
	}

	var nextTodoId = 0;

	var addTodo = exports.addTodo = function addTodo(text) {
	  return {
	    type: 'ADD_TODO',
	    id: nextTodoId++,
	    text: text
	  };
	};

	var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
	  return {
	    type: 'SET_VISIBILITY_FILTER',
	    filter: filter
	  };
	};

	var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
	  return {
	    type: 'TOGGLE_TODO',
	    id: id
	  };
	};

	function add(state, text) {
	  var arr = new Array({ _class: "hudson.matrix.MatrixProject", color: "blue", name: text, url: "https://jenkins.mono-project.com/job/build-package-dpkg-llvm/}" });
	  return {
	    type: ADD,
	    test: 'test',
	    jobs: [].concat(arr, state.jobsByJenkins.test.items),
	    receivedAt: Date.now()
	  };
	}

	function addIfNeeded(text) {
	  return function (dispatch, getState) {
	    return dispatch(add(getState(), text));
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Link = function Link(_ref) {
	  var active = _ref.active,
	      children = _ref.children,
	      _onClick = _ref.onClick;

	  if (active) {
	    return _react2.default.createElement(
	      "span",
	      null,
	      children
	    );
	  }

	  return _react2.default.createElement(
	    "a",
	    { href: "#",
	      onClick: function onClick(e) {
	        e.preventDefault();
	        _onClick();
	      }
	    },
	    children
	  );
	};

	Link.propTypes = {
	  active: _react.PropTypes.bool.isRequired,
	  children: _react.PropTypes.node.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	};

	exports.default = Link;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(10);

	var _ = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddTodo = function AddTodo(_ref) {
	  var dispatch = _ref.dispatch;

	  var input = void 0;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'form',
	      { onSubmit: function onSubmit(e) {
	          e.preventDefault();
	          if (!input.value.trim()) {
	            return;
	          }
	          dispatch((0, _.addTodo)(input.value));
	          input.value = '';
	        } },
	      _react2.default.createElement('input', { ref: function ref(node) {
	          input = node;
	        } }),
	      _react2.default.createElement(
	        'button',
	        { type: 'submit' },
	        'Add Todo'
	      )
	    )
	  );
	};
	AddTodo = (0, _reactRedux.connect)()(AddTodo);

	exports.default = AddTodo;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(10);

	var _ = __webpack_require__(11);

	var _TodoList = __webpack_require__(16);

	var _TodoList2 = _interopRequireDefault(_TodoList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getVisibleTodos = function getVisibleTodos(todos, filter) {
	  switch (filter) {
	    case 'SHOW_ALL':
	      return todos;
	    case 'SHOW_COMPLETED':
	      return todos.filter(function (t) {
	        return t.completed;
	      });
	    case 'SHOW_ACTIVE':
	      return todos.filter(function (t) {
	        return !t.completed;
	      });
	  }
	};

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    todos: getVisibleTodos(state.todos, state.visibilityFilter)
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onTodoClick: function onTodoClick(id) {
	      dispatch((0, _.toggleTodo)(id));
	    }
	  };
	};

	var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodoList2.default);

	exports.default = VisibleTodoList;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Todo = __webpack_require__(17);

	var _Todo2 = _interopRequireDefault(_Todo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoList = function TodoList(_ref) {
	  var todos = _ref.todos,
	      onTodoClick = _ref.onTodoClick;
	  return _react2.default.createElement(
	    'ul',
	    null,
	    todos.map(function (todo) {
	      return _react2.default.createElement(_Todo2.default, _extends({
	        key: todo.id
	      }, todo, {
	        onClick: function onClick() {
	          return onTodoClick(todo.id);
	        }
	      }));
	    })
	  );
	};

	TodoList.propTypes = {
	  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    id: _react.PropTypes.number.isRequired,
	    completed: _react.PropTypes.bool.isRequired,
	    text: _react.PropTypes.string.isRequired
	  }).isRequired).isRequired,
	  onTodoClick: _react.PropTypes.func.isRequired
	};

	exports.default = TodoList;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Todo = function Todo(_ref) {
	  var onClick = _ref.onClick,
	      completed = _ref.completed,
	      text = _ref.text;
	  return _react2.default.createElement(
	    'li',
	    {
	      onClick: onClick,
	      style: {
	        textDecoration: completed ? 'line-through' : 'none'
	      }
	    },
	    text
	  );
	};

	Todo.propTypes = {
	  onClick: _react.PropTypes.func.isRequired,
	  completed: _react.PropTypes.bool.isRequired,
	  text: _react.PropTypes.string.isRequired
	};

	exports.default = Todo;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Repos',


	  contextTypes: {
	    router: _react2.default.PropTypes.object
	  },

	  handleSubmit: function handleSubmit(event) {
	    event.preventDefault();
	    var userName = event.target.elements[0].value;
	    var repo = event.target.elements[1].value;
	    var path = '/repos/' + userName + '/' + repo;
	    console.log(path);
	    this.context.router.push(path);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Repos'
	      ),
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos/reactjs/react-router' },
	            'React Router'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos/facebook/react' },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.handleSubmit },
	            _react2.default.createElement('input', { type: 'text', placeholder: 'userName' }),
	            ' / ',
	            ' ',
	            _react2.default.createElement('input', { type: 'text', placeholder: 'repo' }),
	            ' ',
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'Go'
	            )
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Repo',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        this.props.params.repoName
	      )
	    );
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Home',
	  render: function render() {
	    return _react2.default.createElement(
	      'h2',
	      null,
	      'Home'
	    );
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(10);

	var _actions = __webpack_require__(11);

	var _Picker = __webpack_require__(22);

	var _Picker2 = _interopRequireDefault(_Picker);

	var _Posts = __webpack_require__(23);

	var _Posts2 = _interopRequireDefault(_Posts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AsyncApp = function (_Component) {
	  _inherits(AsyncApp, _Component);

	  function AsyncApp(props) {
	    _classCallCheck(this, AsyncApp);

	    var _this = _possibleConstructorReturn(this, (AsyncApp.__proto__ || Object.getPrototypeOf(AsyncApp)).call(this, props));

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleRefreshClick = _this.handleRefreshClick.bind(_this);
	    return _this;
	  }

	  _createClass(AsyncApp, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          dispatch = _props.dispatch,
	          selectedSubreddit = _props.selectedSubreddit;

	      dispatch((0, _actions.fetchPostsIfNeeded)(selectedSubreddit));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
	        var dispatch = nextProps.dispatch,
	            selectedSubreddit = nextProps.selectedSubreddit;

	        dispatch((0, _actions.fetchPostsIfNeeded)(selectedSubreddit));
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(nextSubreddit) {
	      this.props.dispatch((0, _actions.selectSubreddit)(nextSubreddit));
	      this.props.dispatch((0, _actions.fetchPostsIfNeeded)(nextSubreddit));
	    }
	  }, {
	    key: 'handleRefreshClick',
	    value: function handleRefreshClick(e) {
	      e.preventDefault();

	      var _props2 = this.props,
	          dispatch = _props2.dispatch,
	          selectedSubreddit = _props2.selectedSubreddit;

	      dispatch((0, _actions.invalidateSubreddit)(selectedSubreddit));
	      dispatch((0, _actions.fetchPostsIfNeeded)(selectedSubreddit));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          selectedSubreddit = _props3.selectedSubreddit,
	          posts = _props3.posts,
	          isFetching = _props3.isFetching,
	          lastUpdated = _props3.lastUpdated;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Picker2.default, { value: selectedSubreddit,
	          onChange: this.handleChange,
	          options: ['reactjs', 'frontend'] }),
	        _react2.default.createElement(
	          'p',
	          null,
	          lastUpdated && _react2.default.createElement(
	            'span',
	            null,
	            'Last updated at ',
	            new Date(lastUpdated).toLocaleTimeString(),
	            '.',
	            ' '
	          ),
	          !isFetching && _react2.default.createElement(
	            'a',
	            { href: '#',
	              onClick: this.handleRefreshClick },
	            'Refresh'
	          )
	        ),
	        isFetching && posts.length === 0 && _react2.default.createElement(
	          'h2',
	          null,
	          'Loading...'
	        ),
	        !isFetching && posts.length === 0 && _react2.default.createElement(
	          'h2',
	          null,
	          'Empty.'
	        ),
	        posts.length > 0 && _react2.default.createElement(
	          'div',
	          { style: { opacity: isFetching ? 0.5 : 1 } },
	          _react2.default.createElement(_Posts2.default, { posts: posts })
	        )
	      );
	    }
	  }]);

	  return AsyncApp;
	}(_react.Component);

	AsyncApp.propTypes = {
	  selectedSubreddit: _react.PropTypes.string.isRequired,
	  posts: _react.PropTypes.array.isRequired,
	  isFetching: _react.PropTypes.bool.isRequired,
	  lastUpdated: _react.PropTypes.number,
	  dispatch: _react.PropTypes.func.isRequired
	};

	function mapStateToProps(state) {
	  var selectedSubreddit = state.selectedSubreddit,
	      postsBySubreddit = state.postsBySubreddit;

	  var _ref = postsBySubreddit[selectedSubreddit] || {
	    isFetching: true,
	    items: []
	  },
	      isFetching = _ref.isFetching,
	      lastUpdated = _ref.lastUpdated,
	      posts = _ref.items;

	  return {
	    selectedSubreddit: selectedSubreddit,
	    posts: posts,
	    isFetching: isFetching,
	    lastUpdated: lastUpdated
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(AsyncApp);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Picker = function (_Component) {
	  _inherits(Picker, _Component);

	  function Picker() {
	    _classCallCheck(this, Picker);

	    return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
	  }

	  _createClass(Picker, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          value = _props.value,
	          _onChange = _props.onChange,
	          options = _props.options;


	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          value
	        ),
	        _react2.default.createElement(
	          'select',
	          { onChange: function onChange(e) {
	              return _onChange(e.target.value);
	            },
	            value: value },
	          options.map(function (option) {
	            return _react2.default.createElement(
	              'option',
	              { value: option, key: option },
	              option
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Picker;
	}(_react.Component);

	exports.default = Picker;


	Picker.propTypes = {
	  options: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired).isRequired,
	  value: _react.PropTypes.string.isRequired,
	  onChange: _react.PropTypes.func.isRequired
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Posts = function (_Component) {
	  _inherits(Posts, _Component);

	  function Posts() {
	    _classCallCheck(this, Posts);

	    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
	  }

	  _createClass(Posts, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        null,
	        this.props.posts.map(function (post, i) {
	          return _react2.default.createElement(
	            'li',
	            { key: i },
	            post.thumbnail != 'default' && post.thumbnail != 'self' && _react2.default.createElement('img', { src: post.thumbnail }),
	            post.title
	          );
	        })
	      );
	    }
	  }]);

	  return Posts;
	}(_react.Component);

	exports.default = Posts;


	Posts.propTypes = {
	  posts: _react.PropTypes.array.isRequired
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(10);

	var _actions = __webpack_require__(11);

	var _Jobs = __webpack_require__(25);

	var _Jobs2 = _interopRequireDefault(_Jobs);

	var _Add = __webpack_require__(26);

	var _Add2 = _interopRequireDefault(_Add);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by teodor on 21/02/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var JenkinsApp = function (_Component) {
	    _inherits(JenkinsApp, _Component);

	    function JenkinsApp(props) {
	        _classCallCheck(this, JenkinsApp);

	        return _possibleConstructorReturn(this, (JenkinsApp.__proto__ || Object.getPrototypeOf(JenkinsApp)).call(this, props));
	    }

	    _createClass(JenkinsApp, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var dispatch = this.props.dispatch;

	            dispatch((0, _actions.fetchJobsIfNeeded)());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                jobs = _props.jobs,
	                isFetching = _props.isFetching,
	                lastUpdated = _props.lastUpdated;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Add2.default, null),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    lastUpdated && _react2.default.createElement(
	                        'span',
	                        null,
	                        'Last updated at ',
	                        new Date(lastUpdated).toLocaleTimeString(),
	                        '.',
	                        ' '
	                    ),
	                    !isFetching && _react2.default.createElement(
	                        'a',
	                        { href: '#',
	                            onClick: this.handleRefreshClick },
	                        'Refresh'
	                    )
	                ),
	                isFetching && jobs.length === 0 && _react2.default.createElement(
	                    'h2',
	                    null,
	                    'Loading...'
	                ),
	                !isFetching && jobs.length === 0 && _react2.default.createElement(
	                    'h2',
	                    null,
	                    'No Jobs found!'
	                ),
	                jobs.length > 0 && _react2.default.createElement(
	                    'div',
	                    { style: { opacity: isFetching ? 0.5 : 1 } },
	                    _react2.default.createElement(_Jobs2.default, { jobs: jobs })
	                )
	            );
	        }
	    }]);

	    return JenkinsApp;
	}(_react.Component);

	JenkinsApp.propTypes = {
	    jobs: _react.PropTypes.array.isRequired,
	    isFetching: _react.PropTypes.bool.isRequired,
	    lastUpdated: _react.PropTypes.number,
	    dispatch: _react.PropTypes.func.isRequired
	};

	function mapStateToProps(state) {
	    var jobsByJenkins = state.jobsByJenkins;

	    var _ref = jobsByJenkins['test'] || {
	        isFetching: true,
	        items: []
	    },
	        isFetching = _ref.isFetching,
	        lastUpdated = _ref.lastUpdated,
	        jobs = _ref.items;

	    return {
	        jobs: jobs,
	        isFetching: isFetching,
	        lastUpdated: lastUpdated
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(JenkinsApp);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by teodor on 21/02/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Jobs = function (_Component) {
	    _inherits(Jobs, _Component);

	    function Jobs() {
	        _classCallCheck(this, Jobs);

	        return _possibleConstructorReturn(this, (Jobs.__proto__ || Object.getPrototypeOf(Jobs)).apply(this, arguments));
	    }

	    _createClass(Jobs, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'ul',
	                null,
	                this.props.jobs.map(function (job, i) {
	                    return _react2.default.createElement(
	                        'li',
	                        { key: i },
	                        job.name
	                    );
	                })
	            );
	        }
	    }]);

	    return Jobs;
	}(_react.Component);

	exports.default = Jobs;


	Jobs.propTypes = {
	    jobs: _react.PropTypes.array.isRequired
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(10);

	var _ = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Add = function Add(_ref) {
	    var dispatch = _ref.dispatch;

	    var input = void 0;

	    return _react2.default.createElement(
	        'form',
	        { onSubmit: function onSubmit(e) {
	                e.preventDefault();
	                if (!input.value.trim()) {
	                    return;
	                }
	                dispatch((0, _.addIfNeeded)(input.value));
	                input.value = '';
	            } },
	        _react2.default.createElement('input', { type: 'text', ref: function ref(text) {
	                input = text;
	            } }),
	        _react2.default.createElement(
	            'button',
	            { type: 'submit' },
	            'Add'
	        )
	    );
	}; /**
	    * Created by teodor on 23/02/17.
	    */


	Add = (0, _reactRedux.connect)()(Add);
	exports.default = Add;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'Jira',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h2',
	                null,
	                'Jira'
	            )
	        );
	    }
	}); /**
	     * Created by teodor on 23/02/17.
	     */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);