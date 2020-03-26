import React from 'react'
import axios from 'axios'

import Product from '../components/products/Product'

class ProductList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount(){
    this.loadProductsFromServer()
  }
  loadProductsFromServer(){
    axios
      .get('/api/v1/products.json')
      .then(response => {
        const { products } = response.data
        this.setState({ products })
      })
      .catch(error => console.log(error.response.data))
  }

  render(){
    const { products } = this.state
    const productList = products.map(product => <Product key={product.id} product={product} />) 


    return (
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
    )
  }

}

export default ProductList
