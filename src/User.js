import React, { Component } from 'react';

class User extends Component {
  render () {
    return (
      <article>
        <a href={this.props.url}>{this.props.name}</a>
        <time>{this.props.start}</time>-<time>{this.props.end}</time>
      </article>
    )
  }
}

export default User
