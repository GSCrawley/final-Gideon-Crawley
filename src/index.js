import React from 'react'
import ReactDOM from 'react-dom';
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from '../reducers'
import App from './App'
// import {loadState, saveState } from '../local_storage';


// const persistedState = loadState();
// const store = createStore(rootReducer, persistedState);
// store.subscribe(() => {
//   saveState(store.getState());
// })

// render(
//   <Provider store={store}>
    // <App />
//   </Provider>,
//   document.getElementById('root')
// )

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  