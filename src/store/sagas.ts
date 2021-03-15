import { fork } from 'redux-saga/effects';
import productSaga from 'store/saga/product';
import currencySaga from 'store/saga/currency';

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(currencySaga);
}
