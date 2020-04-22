import React from 'react'
import axios from 'axios'

import Product from '../components/products/Product'
import Jumbotron from '../components/products/Jumbotron'
import NewProductForm from '../components/products/NewProductForm'
import ErrorMessages from '../components/shared/ErrorMessages'

class ProductList extends React.Component {

    state = {
      products: [],
      serverErrors: [],
      saved: false,
      isFormVisible: false
    }

  componentDidMount = () => {
    this.loadProductsFromServer()
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    if(this.state.serverErrors.length > 0 && this.state.serverErrors.length !== nextState.serverErrors.length){
      return false
    }
    return true
  }

  // How to display error message to screen:
  // 1. Test to see if error message is not added to the state
  // 2. Make sure the prop, this.props.history.location.state is not null
  // 3. Set state with error message
  // 4. Clear it from route's history - this is to ensure that you don't get error message over and over again

  componentDidUpdate = () => {
    if(!this.state.flash && this.props.history.location.state){
      const flashMsg = this.props.history.location.state.error
      this.setState({ flash: flashMsg }, () => {
        this.props.history.replace('/', null)
      })
    }
  }

  loadProductsFromServer = () => {
    axios
      .get('/api/v1/products.json')
      .then(response => {
        const { products } = response.data
        this.setState({ products: products })
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }
  handleProductSubmit = (data) => {
    const newProduct = {
      product: { ...data }
    }
    axios
      .post('/api/v1/products.json', newProduct)
      .then(response => {
        // const newProducts = this.state.products.concat(response.data.product)
        const newProducts = [ ...this.state.products, response.data.product ]
        this.setState({
          products: newProducts,
          serverErrors: [],
          saved: true
         })
      })
      .catch(error => {
        const msgs = error.response.data
        let currentErrors = [...this.state.serverErrors]
        msgs.forEach((msg) => {
          if(!currentErrors.includes(msg)) {
            currentErrors = [...currentErrors, msg]
          }
        })
        this.setState({ serverErrors: currentErrors})
      })
  }

  handleButtonClick = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible
    })
  }
  resetSaved = () => {
    this.setState({
      saved: false,
      serverErrors: []
    })
  }

  // 1. The server error messages have to be displayed
  // 2. The form fields don't have to be cleared of the data
  // 3. Re-save the data when errors are fixed
  // 4. Set a flag to indicate status of the save action
  // 5. Clear the form fields only when the data is saved successfully

  render(){
    const { products } = this.state
    // const products = this.state.products
    const productList = products.map(product => (<Product key={product.id} product={product} /> ))

    console.log(this.state)

    return (
      <React.Fragment>
        <Jumbotron />
        {this.state.flash &&
          <div className="row">
            <ErrorMessages
              errors={[this.state.flash]}
              flash={true}
              colWidth="col-dm-12"
            />
          </div>
        }
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-2">
              <button onClick={this.handleButtonClick} className="btn btn-outline-purple btn-sm">+ New Product</button>
            </div>
          </div>
        </div>
        {this.state.isFormVisible &&
        <NewProductForm onSubmit={this.handleProductSubmit}
          serverErrors={this.state.serverErrors}
          saved={this.state.saved}
          onResetSaved={this.resetSaved} />
        }
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-2">
              <div className="row">
                <div className="card-deck">
                  { productList }
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default ProductList
