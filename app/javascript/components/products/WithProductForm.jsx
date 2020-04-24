import React from 'react'
import axios from 'axios'

import { verifyAndSetFieldErrors } from '../../shared/helpers'

const withProductForm = (Component) => {
  return class WithProductForm extends React.Component {
    render(){
      return (
        <Component {...this.props} />
      )
    }
  }
}

export default withProductForm
