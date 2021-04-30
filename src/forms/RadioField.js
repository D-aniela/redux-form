import React from 'react'
import PropTypes from 'prop-types'

const RadioField = ({
  onChange,
  value,
  id,
  textOne,
  textTwo,
  valueOne,
  valueTwo,
}) => (
  <div className="radio-field">
    <label htmlFor={id} className="radio-field__label">
      {textOne}
      <input
        type="radio"
        onChange={() => onChange(valueOne)}
        checked={value === valueOne}
        value={valueOne}
      />
    </label>
    <label htmlFor={id} className="radio-field__label">
      {textTwo}
      <input
        type="radio"
        onChange={() => onChange(valueOne)}
        checked={value === valueTwo}
        value={valueTwo}
      />
    </label>
  </div>
)

RadioField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
}

export default RadioField
