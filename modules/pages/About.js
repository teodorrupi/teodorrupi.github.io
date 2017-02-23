import React from 'react'

import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
// import Root from './containers/Root'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This is the content of about page in a paragraph tag. This section should be visible below the common navigation system.</p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        {/*<Root />*/}
      </div>
      )
  }
})
