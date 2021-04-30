import './App.css'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form/immutable'
import InputField from './forms/InputField'
import RadioField from './forms/RadioField'

import { formHasErrorsSelector, getFormErrorsSelector } from './selectors'
import { formSubmitFailedAction, formSubmitSucceededAction } from './actions'
import validate from './validate'
import listFormErrors from './helpers'

const App = ({ input: { name, onChange, value } }) => {
  let text
  let fieldName

  switch (name) {
    case 'name':
      text = 'Name:'
      fieldName = 'name'
      break
    case 'surname':
      text = 'Surname:'
      fieldName = 'surname'
      break
    case 'age':
      text = 'Age'
      fieldName = 'age'
      break
    default:
      text = ''
      fieldName = ''
  }
  return (
    <InputField
      value={value}
      onChange={onChange}
      text={text}
      fieldName={fieldName}
    />
  )
}

const SampleForm = ({ handleSubmit, errors, formHasErrors }) => (
  <form onSubmit={handleSubmit(validate)}>
    <div className="register-form">
      <Field name="name" type="text" component={App} />
      <Field name="surname" type="text" component={App} />
      <Field name="age" type="number" component={App} />
      <Field
        name="isDeveloper"
        component={({ input: { onChange, value } }) => (
          <RadioField
            id="isDeveloper"
            textOne="Developer"
            textTwo="Non-Developer"
            valueOne="developer"
            valueTwo="non-developer"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <button type="submit">Submit</button>
      {formHasErrors && (
        <div className="register-form">{listFormErrors(errors)}</div>
      )}
    </div>
  </form>
)

SampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formHasErrors: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    isDeveloper: PropTypes.string,
  }),
}

SampleForm.defaultProps = {
  handleSubmit: PropTypes.func.isRequired,
  formHasErrors: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    isDeveloper: PropTypes.string,
  }),
}

const mapStateToProps = (state) => ({
  formHasErrors: formHasErrorsSelector(state),
  errors: getFormErrorsSelector(state),
})

const SampleFormConnect = connect(
  mapStateToProps,
  null
)(
  reduxForm({
    destroyOnUnmount: false,
    form: 'sampleform',
    onSubmitFail: (errors, dispatch) => dispatch(formSubmitFailedAction()),
    onSubmit: (values) => values,
    onSubmitSuccess: (values, dispatch) =>
      dispatch(formSubmitSucceededAction(values)),
  })(SampleForm)
)

export default SampleFormConnect
