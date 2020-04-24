import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ErrorMessages from '../shared/ErrorMessages'
import ProductForm from './ProductForm'
import withProductForm from './WithProductForm'
// import { verifyAndSetFieldErrors } from '../../shared/helpers'

class NewProductForm extends Component {


    componentDidUpdate = () => {
      if(this.props.saved){
        this.props.onSetFields()
        // this.setState({
        //   name: '',
        //   price: '',
        //   description: '',
        //   quantity: ''
        // })
        this.props.onResetSaved()
      }
    }



  render(){
    const buttonText = "Create Product"
    const title = "Add New Product"
    return (
      <div className="container mb-4">
        <div className="row">
        {this.props.serverErrors.length > 0 && <ErrorMessages errors={this.props.serverErrors} />
        }
          <div className="col-md-8 offset-md-2">
            <div className="card panel-div">
              <h1 className="text-center form-header-style pt-2 pb-3">
                {title}
              </h1>

              <ProductForm
                onSubmit={this.props.onSubmit}
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                state={this.props.state}
                buttonText={buttonText}
              />




            </div>
          </div>
        </div>
      </div>
    )
  }
}

NewProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  serverErrors: PropTypes.array.isRequired,
  saved: PropTypes.bool.isRequired,
  onResetSaved: PropTypes.func.isRequired
}

export default withProductForm(NewProductForm)
