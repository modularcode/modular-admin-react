import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './_state/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';






const configureStore = preloadedState => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const composeEnhancers = composeWithDevTools();

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        // createLogger()
      ),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./_state/reducer', () => {
      const nextRootReducer = require('./_state/reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore;
