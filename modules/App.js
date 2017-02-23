import React from 'react'

import NavLink from './components/NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>
          App
        </h1>
        <ul role="nav" className="inline-menu">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/asyncApp">AsyncApp</NavLink></li>
          <li><NavLink to="/jenkinsApp">JenkinsApp</NavLink></li>
          <li><NavLink to="/jira">Jira</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})
