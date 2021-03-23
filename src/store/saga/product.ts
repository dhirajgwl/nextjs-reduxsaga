import { all, put, takeLatest } from 'redux-saga/effects';
import { ACTIONS, failure, productDataSuccess } from 'store/actions/product';

function* loadProduct() {
  try {
    const res = yield fetch('https://fakestoreapi.herokuapp.com/products');
    const data = yield res.json();
    yield put(productDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* productSaga() {
  yield all([takeLatest(ACTIONS.PRODUCT_DATA, loadProduct)]);
}

export default productSaga;
