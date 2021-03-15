import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore = () => {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
  const getStore = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  const store = { ...getStore, sagaTask: sagaMiddleware.run(rootSaga) };
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
