import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessages = ({ errors, colWidth="col-md-8 offset-md-2"}) => (
  <div className={colWidth}>
    <div style={{color: "#a94442", border: "1px solid red", backgroundColor: "#f2dede", padding: "15px 20px 5px"}}>
      {errors.map((error, index) => (<p key={index}>{error}</p>))}
    </div>
  </div>
)

ErrorMessages.propTypes = {
  errors: PropTypes.array.isRequired,
  colWidth: PropTypes.string
}


export default ErrorMessages
