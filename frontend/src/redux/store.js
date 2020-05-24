import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Activation of redux sagas
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};
