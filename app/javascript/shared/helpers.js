export const inputClasses = (fieldName, state) => {
  let classes = 'form-control'
  if(state.errors[fieldName]) {
    return `${classes} is-invalid`
  }
  return classes
}

export const EMAIL_REGEX = /^[A-Z0-9#_-~!$&'()*+,;=:.%]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i


export const verifyAndSetFieldErrors = (context, fieldNames) => {
  let errors = {}

  fieldNames.forEach(fieldName => {
    const fieldError = context.checkErrors(context.state, fieldName)
    errors = Object.assign({}, errors, fieldError)
    // errors = { ...errors, ...fieldError}
  })
  if(Object.keys(errors).length > 0){
    context.setState({ errors })
  }
}
