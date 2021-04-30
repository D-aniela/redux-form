import React from 'react'

const listFormErrors = (errors) => {
  if (typeof errors !== 'undefined' && errors.size > 0) {
    return Array.from(errors).map((v) => <p key={v[0]}>{v[1]}</p>)
  }

  return []
}

export default listFormErrors
