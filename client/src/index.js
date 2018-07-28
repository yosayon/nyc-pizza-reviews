import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './1_Root/App'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './Util/reducers/index';
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
    document.getElementById('root')
);
