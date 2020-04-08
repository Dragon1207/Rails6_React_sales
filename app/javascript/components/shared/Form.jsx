import React from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
  return (
    <div className="form-body-style px-5 pt-4">
      <form className="form-horizontal" onSubmit={props.onSubmit} noValidate>
        {props.children}
      </form>
    </div>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired
}

export default Form
