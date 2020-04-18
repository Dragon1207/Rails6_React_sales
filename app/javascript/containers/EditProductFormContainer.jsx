import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import ErrorMessages from '../components/shared/ErrorMessages'
import ProductForm from '../components/products/ProductForm'
import { verifyAndSetFieldErrors } from '../shared/helpers'

class EditProductForm extends Component {
  state = {
    name: '',
    description: '',
    price: '',
    quantity: '',
    errors: {},
    serverErrors: [],
    saved: false
  }
  render(){
    const buttonText = 'Update Product'
    const title = 'Editing Product'

    return (
      <div className="container mb-4">
        {this.state.serverErrors.length > 0 &&
        <ErrorMessages errors={this.state.serverErrors} />
        }
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card panel-div">
            <h1 className="text-center form-header-style pt-2 pb-3"> { title } </h1>
            <ProductForm
              onSubmit={this.handleSubmit}
              state={this.state}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              buttonText={buttonText}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default EditProductForm
