import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

let students = [
  {name:"Adam Jahr", username: "atomjar"},
  {name:"Huy Luong", username: "huyluong88"},
  {name:"Eric Ransom", username: "eransom"},
  {name:"Moa Bullon", username: "moabullon"}
]

class App extends Component {

constructor (){
  super()
  this.state = {
  }
}

componentDidMount () {
  this.user('axtho24')
}

showUser () {
  this.user(this.otherUser.value)
}

user (username) {
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

      {students.map(student =>{
        return <button onClick={this.user.bind(this, student.username)}>{student.name}</button>
      })}
      
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
