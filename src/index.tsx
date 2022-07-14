import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(reducer, compose(applyMiddleware(thunk, loadingBarMiddleware())))
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>
);
