import React, { Component } from 'react'

import ErrorMessages from '../shared/ErrorMessages'
import TextArea from '../shared/TextArea'
import Button from '../shared/Button'
import Form from '../shared/Form'
import { verifyAndSetFieldErrors } from '../../shared/helpers'

class CommentForm extends Component {
  state = {
    body: '',
    errors: {}
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleBlur = (event) => {
    const { name } = event.target
    const fieldError = this.checkErrors(this.state, name)
    const errors = Object.assign({}, this.state.errors, fieldError)
    this.setState({ errors })
  }

  checkErrors = (state, fieldName) => {
    const error = {}
    switch (fieldName){
      case 'body':
        if(!state.body){
          error.body = 'Please provide comment body'
        }
        break
      default:
    }
    return error
  }

  clearError = (name, value) => {
    let errors = { ...this.state.errors }

    switch (name){
      case 'body':
        if(value.length > 0){
          delete errors['body']
        }
        break
      default:
    }
    this.setState({ errors })
  }

  render(){
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1 className="text-center form-header-style mt-5 pt-2 pb-3">
              Add New Comment
            </h1>
            <div className="form-body-style px-5 pt-4">
              <Form onSubmit={this.handleSubmit}>
                <TextArea
                  title="Description"
                  name="body"
                  value={this.state.body}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  placeholder="Comment here"
                  rows="5"
                  state={this.state}
                  autoFocus={true}
                />
                <Button>Create Comment</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentForm
