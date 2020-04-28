import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'

import NewProductForm from '../components/products/NewProductForm'
import CommentList from '../components/comments/CommentList'


class ProductDetail extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      product: {},
      editing: false,
      updated: false,
      comments: [],
      saved: false,
      serverErrors: []
    }
  }

  componentDidMount(){
    this.getProductAndComments()
  }

  componentDidUpate = () => {
    if(this.state.editing && this.state.updated){
      this.getProductAndComments()
    }
  }

  getProductAndComments = () => {
    const id = this.props.match && this.props.match.params.id

    if(id){
      axios
        .all([
          axios.get(`/api/v1/products/${id}.json`),
          axios.get(`/api/v1/products/${id}/comments.json`)
        ])
        .then(axios.spread((productResponse, commentsResponse) => {
          this.setState({
            product: productResponse.data.product,
            comments: commentsResponse.data.comments
          })
        }))
        .catch(error => {
          this.props.history.push({
            pathname: '/',
            state: { error: error.response.data.error }
          })
        })
    }
  }


  editingProduct = (value) => {
    if(value == undefined){
      this.setState({ editing: true })
    } else if(value === "edited"){
      this.setState({ editing: false })
    }
  }

  setUpdated = (value) => {
    this.setState({updated: value})
  }

  isOwner = (user, product) => {
    if(Object.keys(product).length > 0){
      return user && user.id === product.user_id
    }
    return false
  }

  handleDelete = (event) => {
    event.preventDefault()
    this.handleProductDelete(this.props.match.params.id)
  }

  handleCommentSubmit = (data) => {
    const id = +this.props.match.params.id
    axios
      .post(`/api/v1/products/${id/comments.json}`, data)
      .then(response => {
        const comments = [response.data.comment, ...this.state.comments]
        this.setState({ comments })
      })
      .catch(error => (
        this.setState({ serverErrors: error.response.data })
      ))
  }

  handleProductDelete = (id) => {
    axios
      .delete(`/api/v1/products/${id}.json`)
      .then(response => {
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
  }

  resetSaved = () => {
    this.setState({
      saved: false,
      serverErrors: []
    })
  }

  render(){
    const id = this.props.match && this.props.match.params.id
    const { product } = this.state
    const { currentUser } = this.props

    console.log(this.props)

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <img className="img-fluid" src="http://placehold.it/350x150" width="100%" />
          </div>

          <div className="col-md-10 offset-md-1">
            <div className="float-right">
              <h3><span className="badge badge-pill badge-purple">{product.price}</span></h3>
            </div>
            <div>
              <h3>{product.name}</h3>
            </div>

            <div className="mb-4">
              {product.description}
            </div>

          {this.isOwner(currentUser, product) && !this.state.editing ?

          <React.Fragment>
            <div className="float-right btn-edit-del">
              <a href="#" onClick={this.handleDelete} className="btn btn-outline-danger btn-lg">Delete</a>
            </div>

            <div className="btn-edit-del">
              <Link to={`/products/${id}/edit`} className="btn btn-outline-purple btn-lg">Edit</Link>
            </div>
          </React.Fragment> : null
        }
          </div>
          {this.isOwner(currentUser, product) ?

            <Route path="/products/:id/edit" render={(props) => (
              <NewProductForm
                {...props}
                onEdit={this.editingProduct}
                onUpdate={this.setUpdated}
              />
            )} /> : null
        }
        </div>

        <hr />
        {!this.state.editing ?
          <CommentList
            comments={this.state.comments}
            onCommentSubmit={this.handleCommentSubmit}
            serverErrors={this.state.serverErrors}
            saved={this.state.saved}
            onResetSaved={this.resetSaved}
            currentUser={this.currentUser}
          /> : null
        }

      </div>
    )
  }
}

ProductDetail.propTypes = {
  currentUser: PropTypes.object
}

export default ProductDetail
