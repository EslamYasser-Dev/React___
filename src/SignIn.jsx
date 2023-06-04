import React, { Component } from 'react'


class SignIn extends Component {


  //this Constructor initialize these values
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email:'',
      age:'',
      password: ''
    }
  }

  HandleNameChange=(event) => {
    this.setState({
        name:event.state.value,
    })
  }

  HandleEmailChange=(event) => {
    this.setState({
        email:event.state.value,
    })
  }
  

  HandleAgeChange=(event) => {
    this.setState({
        age:event.state.value,
    })
  }

  HandlePassChange=(event) => {
    this.setState({
        password:event.state.value,
    })
  }



  HandleFormChange=(event) => {
    this.setState({
        password:event.state.value,
    })
  }


  handleFormSubmit= (e) => {
    sessionStorage.setItem(this.state.name, true) //to him login for this session (userWho are login, Islogin(true or false))
    window.location('aroute') // this move you to another page ex:home.html
    e.preventDefault()
}

render(){
    const {name,email,age,password} = this.state
    return (
        <div>
            <form>
                <input type='text' value={name}  onChange={this.HandleNameChange}/>
                <input type='email' value={email} onChange={this.HandleEmailChange}/>
                <input type='number' value={age} onChange={this.HandleAgeChange}/>
                <input type='password' value={password} onChange={this.HandlePassChange}/>
            </form>
            <button type='submit'>SignUp</button>
        </div>
    )
}
}

export default SignIn
