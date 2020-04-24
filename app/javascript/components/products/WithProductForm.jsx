import React from 'react'
import axios from 'axios'

import { verifyAndSetFieldErrors } from '../../shared/helpers'

const withProductForm = (Component) => {
  return class WithProductForm extends React.Component {
    state = {
      fields: {
        name: '',
        description: '',
        price: '',
        quantity: '',
      },
      errors: {}
      }

      handleSubmit = (event, cb) => {
        event.preventDefault()

        const fieldNames = Object.keys(this.state.fields)
        verifyAndSetFieldErrors(this, fieldNames)

        if(Object.keys(this.state.errors).length === 0){
          const { id, name, description, price, quantity } = this.state.fields

          const product = {
            id,
            name,
            description,
            price: parseFloat(price),
            quantity: parseInt(quantity, 10)
          }
          id ? cb(product) : this.props.onSubmit(product)
      }

    }

      handleChange = (event) => {
        const { name, value } = event.target
        const { fields }= this.state
        fields[name] = value
        this.setState({ fields })
        this.clearErrors(name, value)
      }

      clearErrors = (name, value) => {
        let errors = { ...this.state.errors }

        switch(name){
          case 'name':
            if(value.length > 0){
              delete errors['name']
            }
            break
          case 'description':
            if(value.length > 0){
              delete errors['description']
            }
            break
          case 'price':
            if(parseFloat(value) > 0.0 || value.match(/^\d{1,}(\.\d{0,2})?$/)){
              delete errors['price']
            }
            break
          case 'quantity':
            if(parseInt(value, 10) > 0 || value.match(/^\d{1,}$/)){
              delete errors['quantity']
            }
            break
          default:
        }
        this.setState({ errors })
      }

      checkErrors = (state, fieldName) => {
        const error = {}

        switch (fieldName){
          case 'name':
            if(!state.fields.name){
              error.name = 'Please provide a name'
            }
            break
          case 'description':
            if(!state.fields.description){
              error.description = 'Please provide a description'
            }
            break
          case 'price':
            if(parseFloat(state.fields.price) <= 0.0 || !state.fields.price.toString().match(/^\d{1,}(\.\d{0,2})?$/)){
              error.price = 'Price must be a positive number'
            }
            break
          case 'quantity':
            if(parseInt(state.fields.quantity, 10) <= 0 || !state.fields.quantity.toString().match(/^\d{1,}$/)){
              error.quantity = 'Quantity must be a positive integer'
            }
            break
        }
        return error
      }

      handleBlur = (event) => {
        const { name } = event.target
        const fieldError = this.checkErrors(this.state, name)
        const errors = Object.assign({}, this.state.errors, fieldError)
        this.setState({ errors })
      }

      setFields = (product, cb) => {
        this.setState({
          fields: {
            id: product ? product.id : '',
            name: product ? product.name : '',
            price: product ? product.price : '',
            description: product ? product.description : '',
            quantity: product ? product.quantity : '',
          }
        }, cb ? cb() : null)
      }

    render(){
      return (
        <Component
          {...this.props}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onSetFields={this.setFields}
          state={this.state}
        />
      )
    }
  }
}

export default withProductForm
