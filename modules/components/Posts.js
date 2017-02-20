import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}>
            {post.thumbnail != 'default' && post.thumbnail != 'self' &&
              <img src={post.thumbnail}/>
            }
            {post.title}
          </li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
