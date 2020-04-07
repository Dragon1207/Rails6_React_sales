import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <div className="form-group row">
    <div className="col-md-9 offset-md-3">
      <button className="btn btn-outline-purple btn-lg">
        {props.children}
      </button>
    </div>
  </div>
)

Button.propTypes = {
  children: PropTypes.string.isRequired
}


export default Button
