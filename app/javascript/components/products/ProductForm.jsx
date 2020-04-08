import React from 'react'
import PropTpyes from 'prop-types'

import Input from '../shared/Input'
import Button from '../shared/Button'
import TextArea from '../shared/TextArea'
import Form from '../shared/Form'

const ProductForm = (props) => (
  <Form onSubmit={props.onSubmit}>
  <Input
  title="Name"
  type="text"
  name="name"
  value={props.state.name}
  onChange={props.handleChange}
  onBlur={props.handleBlur}
  placeholder="Item name"
  autoFocus={true}
  state={props.state}
  />

  <Input
  title="Price"
  type="text"
  name="price"
  value={props.state.price}
  onChange={props.handleChange}
  onBlur={props.handleBlur}
  placeholder="Item price"
  autoFocus={false}
  state={props.state}
  />

  <Input
  title="Quantity"
  type="number"
  name="quantity"
  value={props.state.quantity}
  onChange={props.handleChange}
  onBlur={props.handleBlur}
  placeholder="Item quantity"
  autoFocus={false}
  state={props.state}
  />

  <TextArea
  title="Description"
  name="description"
  value={props.state.description}
  rows="5"
  onChange={props.handleChange}
  onBlur={props.handleBlur}
  placeholder="Item description"
  autoFocus={false}
  state={props.state}
  />

  <Input
  title="Image"
  type="file"
  name="image"
  value={props.state.image}
  onChange={props.handleChange}
  onBlur={props.handleBlur}
  placeholder="Item image"
  autoFocus={false}
  state={props.state}
  />

  <Button>
    {props.buttonText}
  </Button>
  </Form>
)

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired
}



export default ProductForm
