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

  handleBlur = (event) => {}

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
