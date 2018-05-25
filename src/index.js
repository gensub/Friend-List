import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { HashRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import friendReducer from './reducers/friendlist';
// import rootReducer from './reducers';
import App from './container/App';

const reducer = combineReducers({
  friendlist: friendReducer,
  form: formReducer,
  routing: routerReducer,
});
const middleware = routerMiddleware(Router);
const store = createStore(reducer, compose(applyMiddleware(thunk, middleware)));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
