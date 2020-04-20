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

  componentDidMount = () => {
    const id = this.props.match && +this.props.match.params.id
    if(id){
      this.getProduct(id)
    }
  }

  getProduct = (id) => {
    axios
      .get(`/api/v1/products/${id}.json`)
      .then(response => {
        const product = response.data.product
        const idx = product.price.search(/\d/)
        product.price = product.price.slice(idx)

        this.setState({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: product.quantity
        }, () => {
          this.props.onEdit()
        })
      })
      .catch(error => console.log(error))
  }

  resetSaved = () => {
    this.setState({
      saved: false,
      serverErrors: []
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    this.clearErrors(name, value)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const fieldNames = ['name', 'description', 'price', 'quantity']
    verifyAndSetFieldErrors(this, fieldNames)
    const editedProduct = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      price: parseFloat(this.state.price),
      quantity: parseInt(this.state.quantity, 10)
    }
    this.handleProductUpdate(editedProduct)
  }

  handleProductUpdate = () => {

  }

  checkErrors = (state, fieldName) => {}

  clearErrors = (name, value) => {}

  handleBlur = (event) => {}


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
