import { ProductData } from 'type/types';
import { ACTIONS } from 'store/actions/product';

const initState: ProductData = {
  error: null,
  data: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.FAILURE:
      return {
        ...state,
        error: JSON.stringify(action.error),
      };

    case ACTIONS.PRODUCT_DATA_SUCCESS: {
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
};
