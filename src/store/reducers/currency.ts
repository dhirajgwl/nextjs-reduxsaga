import { CurrencyReducer } from 'type/types';
import { ACTIONS } from 'store/actions/currency';

const initState: CurrencyReducer = {
  error: null,
  currency: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.FAILURE:
      return { ...state, error: JSON.stringify(action.error) };
    case ACTIONS.CURRENCY_DATA_SUCCESS:
      return { ...state, currency: action.data };
    default:
      return state;
  }
};
