import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      password: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handlePassChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleFormSubmit = (e) => {
    sessionStorage.setItem(this.state.name, true); //  عشان اتاكد انو لوجن طول السشن دي 
    
    window.location.href = 'الصفحة اللي ممكن نكون عايزين نروح لها ';
    e.preventDefault();
  };

  render() {
    const { name, email, age, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>UserName</label>
          <input type="text" value={name} onChange={this.handleNameChange} />
          <label>Email</label>
          <input type="email" value={email} onChange={this.handleEmailChange} />
          <label>Age</label>
          <input type="number" value={age} onChange={this.handleAgeChange} />
          <label>Password</label>
          <input type="password" value={password} onChange={this.handlePassChange} />
          <br />
          <button type="submit">SignUp</button>
        </form>
        <br/>
      </div>
    );
  }
}

export default SignUp;