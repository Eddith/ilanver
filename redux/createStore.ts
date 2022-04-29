import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddle from "redux-saga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddle();
export const sagaMiddlewares = [sagaMiddleware];

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...sagaMiddlewares)
);
