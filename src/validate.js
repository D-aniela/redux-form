import { SubmissionError } from 'redux-form/immutable'
import * as R from 'ramda'

const validate = (values) => {
  const stringPattern = /^[A-Za-z]+$/
  const numberPattern = /^[0-9]+$/
  const errors = {}
  const name = values.get('name')
  const surname = values.get('surname')
  const age = values.get('age')
  const isDeveloper = values.get('isDeveloper')

  if (R.isNil(name)) {
    errors.name = 'field "Name" can\'t be empty'
  } else if (!stringPattern.test(name)) {
    errors.name = 'field "Name" can have letters only'
  }

  if (R.isNil(surname)) {
    errors.surname = 'field "Surname" can\'t be empty'
  } else if (!stringPattern.test(surname)) {
    errors.surname = 'field "Surname" can have letters only'
  }

  if (R.isNil(age)) {
    errors.age = 'field "Age" can\'t be empty'
  } else if (!numberPattern.test(age)) {
    errors.age = 'field "Age" can have numbers only'
  }

  if (R.isNil(isDeveloper)) {
    errors.isDeveloper = 'field "Are you a developer" needs an answer'
  }

  if (Object.keys(errors).length > 0) {
    throw new SubmissionError(errors)
  }

  return values
}

export default validate
