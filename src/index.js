import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import orderIngredientsReducer from "./container/Checkout/store/reducer";
import createSagaMiddleware from "redux-saga";
import initIngredientsReducer from "./container/BurgerBuilder/store/reducer";
import fetchOrderReducer from "./container/OrderDetails/store/reducer";
import authenticationReducer from "./container/Aunthentication/store/reducer";
import rootSaga from "./saga";
const rootReducer = combineReducers({
  orderIngredientsReducer,
  initIngredientsReducer,
  fetchOrderReducer,
  authenticationReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
