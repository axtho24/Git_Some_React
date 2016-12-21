import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

constructor (){
  super()
  this.state = {
  }
}

componentDidMount () {
  axios.get(`https://api.github.com/users/axtho24`).
  then(response => this.setState ({
    avatar: response.data.avatar_url,
    username: response.data.login,
    link: response.data.html_url,
    blog: response.data.blog,
    location: response.data.location,
    hireable: response.data.hireable
}))
}

showUser () {
  let username = this.otherUser.value
  axios.get(`https://api.github.com/users/${username}`).
  then(response => this.setState ({
    avatar: response.data.avatar_url,
    username: response.data.login,
    link: response.data.html_url,
    blog: response.data.blog,
    location: response.data.location,
    hireable: response.data.hireable
}))
}

changeUser1 () {
  axios.get(`https://api.github.com/users/atomjar`).
  then(response => this.setState ({
    avatar: response.data.avatar_url,
    username: response.data.login,
    link: response.data.html_url,
    blog: response.data.blog,
    location: response.data.location,
    hireable: response.data.hireable
}))
}

changeUser2 () {
  axios.get(`https://api.github.com/users/huyluong88`).
  then(response => this.setState ({
    avatar: response.data.avatar_url,
    username: response.data.login,
    link: response.data.html_url,
    blog: response.data.blog,
    location: response.data.location,
    hireable: response.data.hireable
}))
}

changeUser3 () {
  axios.get(`https://api.github.com/users/eransom`).
  then(response => this.setState ({
    avatar: response.data.avatar_url,
    username: response.data.login,
    link: response.data.html_url,
    blog: response.data.blog,
    location: response.data.location,
    hireable: response.data.hireable
}))
}

changeUser4 () {
  axios.get(`https://api.github.com/users/moabullon`).
  then(response => this.setState ({
    avatar: response.data.avatar_url,
    username: response.data.login,
    link: response.data.html_url,
    blog: response.data.blog,
    location: response.data.location,
    hireable: response.data.hireable
}))
}


  render() {
    return (
      <div className="App">
      <header>
        <p className="title"> GIT PROFILES</p>
        <div className="find">
        <input placeholder="username" ref={(input) => {this.otherUser = input}}/>
        <button onClick={this.showUser.bind(this)}>Find User</button>
        </div>
      </header>
      <p> The Iron Yard Front-End students</p>
      <p>
      <button onClick={this.changeUser1.bind(this)}>Adam Jahr</button>
      <button onClick={this.changeUser2.bind(this)}>Huy Luong</button>
      <button onClick={this.changeUser3.bind(this)}>Eric Ransom</button>
      <button onClick={this.changeUser4.bind(this)}>Moa Bullon</button>
      </p>
      <div className="contains">
      <section>
      <img className="avatars" src={this.state.avatar}/><br/>
          <div className="users">
            <span> Username: {this.state.username}<br/></span>
            <span> <a href={this.state.link}>My Github</a> <br/></span>
            <span> <a href={this.state.blog}>My Blogs</a> <br/></span>
            <span> Location: {this.state.location}<br/></span>
            <span>{this.state.hireable ? "Available for hire" : ""}</span>
          </div>
      </section>
      </div>
      </div>
    );
  }
}

export default App;
