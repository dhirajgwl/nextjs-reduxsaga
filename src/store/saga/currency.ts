import { put, all, takeLatest } from 'redux-saga/effects';
import { ACTIONS, failure, currencyDataSccess } from 'store/actions/currency';

function* fetchCurrencyRate() {
  try {
    const res = yield fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY');
    const data = yield res.json();
    yield put(currencyDataSccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* currencySaga() {
  yield all([takeLatest(ACTIONS.CURRENCY_DATA, fetchCurrencyRate)]);
}

export default currencySaga;
