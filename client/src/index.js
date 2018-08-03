import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './1_Root/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './configureStore'
import store from './configureStore'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
    document.getElementById('root')
);
