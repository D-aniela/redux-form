import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import monitorReducerEnhancer from './enhancers'
import loggerMiddleware from './logger'
import rootReducer from './reducer'

export default function configureStore(preloadedState) {
  const middleware = [loggerMiddleware]
  const middlewareEnhancer = applyMiddleware(...middleware)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.REACT_APP_ENV !== 'production' && module.hot) {
    module.hot.accept(() => store.replaceReducer(rootReducer))
  }
  return store
}
