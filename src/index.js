import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import './index.css';
import Main from './Main'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ?  window.devToolsExtension(): f => f
  )
)


ReactDOM.render(<Provider store={store}> < Main/> </Provider>, document.getElementById('root'));