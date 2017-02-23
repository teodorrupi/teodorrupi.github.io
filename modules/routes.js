import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './pages/About'
import Repos from './pages/Repos'
import Repo from './components/Repo'
import Home from './pages/Home'
import AsyncApp from './containers/AsyncApp'
import JenkinsApp from './containers/JenkinsApp'
import Jira from "./pages/Jira";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/AsyncApp" component={AsyncApp}/>
    <Route path="/JenkinsApp" component={JenkinsApp}/>
      <Route path="/Jira" component={Jira}/>
  </Route>
)
