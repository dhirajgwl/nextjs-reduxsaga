import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import productReducer from 'store/reducers/product';
import currencyReducer from 'store/reducers/currency';

const combinedReducer = combineReducers({
  productData: productReducer,
  currencyReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (!!state.productData.data.length) nextState.productData.data = state.productData.data;

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default reducer;
