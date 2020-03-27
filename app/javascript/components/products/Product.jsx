import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Product = ({ product }) => (
  <div className="col-md-4 col-sm-6 col-xs-12 mb-4">
    <div className="card">
      <img className="card-img-top img-fluid" src="http://placehold.it/140x100" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">
          <span className="badge badge-pill badge-purple float-right">{product.price}</span>
          <Link to={`/products/${product.id}`}>{ product.name }</Link>          
        </h5>
        <p className="card-text">
            {product.description}
        </p>
      </div>
    </div>
  </div>
)

Product.propTypes = {
  product: PropTypes.object.isRequired
}
export default Product
