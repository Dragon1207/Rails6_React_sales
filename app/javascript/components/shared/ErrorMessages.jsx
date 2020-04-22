import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ErrorMessages = ({ errors, colWidth="col-md-8 offset-md-2", flash }) => {
  const [ toShow, setToShow ] = useState(true)

  useEffect(() => {
    if(flash){
      setTimeout(() => {
        setToShow(false)
      },2000)
    }
  }, [toShow])

  const message = toShow ?
    <div className={colWidth}>
      <div style={{color: "#a94442", border: "1px solid red", backgroundColor: "#f2dede", padding: "15px 20px 5px"}}>
        {errors.map((error, index) => (<p key={index}>{error}</p>))}
      </div>
    </div> : null
  return message
}

ErrorMessages.propTypes = {
  errors: PropTypes.array.isRequired,
  colWidth: PropTypes.string
}


export default ErrorMessages
