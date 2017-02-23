import React from 'react'

import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
// import Root from './containers/Root'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is the content of about page in a paragraph tag. This section should be visible below the common navigation system.</p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        {/*<Root />*/}
      </div>
      )
  }
})
