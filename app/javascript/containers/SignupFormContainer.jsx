import React, { Component } from 'react'
import axios from 'axios'
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import SignupForm from '../components/shared/Form'

class Signup extends Component {
  state = {
    firstname:  '',
    lastname:   '',
    email:      '',
    password:   '',
    errors:     {}
  }

  handleChange = (event) => {
    const { name, value} = event.target
    this.setState({ [name]: value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { firstname, lastname, email, password } = this.state

    const newUser = {
      user: {
        first_name: firstname,
        last_name: lastname,
        email,
        password
      }
    }
    this.handleSignup(newUser)
  }

  handleSignup = (user) => {
    axios
      .post('/api/v1/users.json', user)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }
  handleBlur = (event) => {
    
  }
  render(){
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center form-header-style mt-5 pt-2 pb-3">Sign Up</h1>
            <SignupForm onSubmit={this.handleSubmit}>
              <Input
                title="First Name"
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder="Your first name"
                autoFocus={true}
                state="this.state"
               />

               <Input
                 title="Last Name"
                 type="text"
                 name="lastname"
                 value={this.state.lastname}
                 onChange={this.handleChange}
                 onBlur={this.handleBlur}
                 placeholder="Your last name"
                 autoFocus={false}
                 state="this.state"
                />

                <Input
                  title="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Your email address"
                  autoFocus={false}
                  state="this.state"
                 />

                 <Input
                   title="Password"
                   type="password"
                   name="password"
                   value={this.state.password}
                   onChange={this.handleChange}
                   onBlur={this.handleBlur}
                   placeholder="Your password"
                   autoFocus={false}
                   state="this.state"
                  />

                  <Button>Sign Up</Button>


            </SignupForm>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
