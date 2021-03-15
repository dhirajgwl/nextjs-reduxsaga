export const ACTIONS = {
  PRODUCT_DATA: 'PRODUCT_DATA',
  FAILURE: 'FAILURE',
  PRODUCT_DATA_SUCCESS: 'PRODUCT_DATA_SUCCESS',
  HYDRATE: 'HYDRATE',
};

export const failure = (error: any) => {
  return {
    type: ACTIONS.FAILURE,
    error,
  };
};

export const fetchProduct = () => {
  return { type: ACTIONS.PRODUCT_DATA };
};

export const productDataSuccess = (data) => {
  return {
    type: ACTIONS.PRODUCT_DATA_SUCCESS,
    data,
  };
};
