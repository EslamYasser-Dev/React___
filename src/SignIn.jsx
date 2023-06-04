import React, { Component } from 'react'


class SignIn extends Component {


  //this Constructor initialize these values
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }

  HandleTextChange=(event) => {
    this.setState({
        username:event.state.value,
    })
  }

  HandlePWDChange=(event) => {
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
    const {name,password} = this.state
    return (
        <div>
            <form>
                <input type='text' value={name} />
                <input type='password' value={password}/>
            </form>
            <button type='submit'>SignIn</button>
        </div>
    )
}
}

export default SignIn
