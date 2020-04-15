export const inputClasses = (fieldName, state) => {
  let classes = 'form-control'
  if(state.errors[fieldName]) {
    return `${classes} is-invalid`
  }
  return classes
}

export const EMAIL_REGEX = /^[A-Z0-9#_-~!$&'()*+,;=:.%]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
