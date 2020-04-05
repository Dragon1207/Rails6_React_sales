import React from 'react'
import PropTypes from 'prop-types'
import { inputClasses } from '../../shared/helpers'

const Input = (props) => (
  <div className="form-group row">
    <label htmlFor={props.name} className="col-md-3 col-form-label">{props.title}</label>
    <div className="col-md-9">
      <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} onBlur={props.onBlur} id={props.id} className={inputClasses(`${props.name}`, props.state)} placeholder={props.placeholder} autoFocus={props.autoFocus} />
      {props.state.errors[props.name] ?
        <div className='invalid-feedback'>    {props.state.errors[props.name]}
        </div> : null}
    </div>
  </div>
)

Input.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  state: PropTypes.object.isRequired,
  autoFocus: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired

}

export default Input
