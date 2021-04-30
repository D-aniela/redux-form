import { combineReducers } from 'redux-immutable'
import { reducer as reduxFormReducer, reduxForm } from 'redux-form/immutable'

//Import the proper version of the reducer
//it will make combineReducers work properly and is required
//To make redux form work
const rootReducer = combineReducers({
  form: reduxFormReducer,
})

export default rootReducer
