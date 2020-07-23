import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './sagas/rootSaga';
import { combineReducer } from './reducers/combineReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };
