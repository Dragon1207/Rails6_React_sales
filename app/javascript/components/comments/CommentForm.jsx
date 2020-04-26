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

  componentDidUpdate = () => {
    if(this.props.saved){
      this.setState({ body: '' })
      this.props.onResetSaved()
    }
  }

  componentWillunmount = () => {
    if(this.props.serverErrors.length > 0){
      this.props.onResetSaved()
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const fieldNames = ['description']
    verifyAndSetFieldErrors(this, fieldNames)

    if(Object.keys(this.state.errors).length === 0){
      const comment = {
        body: this.state.body.trim()
      }
      const payload = { comment }
      this.props.onCommentSubmit(payload)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    this.clearErrors(name, value)
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

  clearErrors = (name, value) => {
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
          {this.props.serverErrors && this.props.serverErrors.length > 0 &&
            <ErrorMessages errors={this.props.serverErrors} />

          }
          <div className="col-md-10 offset-md-1">
            <h1 className="text-center form-header-style mt-5 pt-2 pb-3">
              Add New Comment
            </h1>
           
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
    )
  }
}

export default CommentForm
