export const ACTIONS = {
  CURRENCY_DATA: 'CURRENCY_DATA',
  FAILURE: 'FAILURE',
  CURRENCY_DATA_SUCCESS: 'CURRENCY_DATA_SUCCESS',
  HYDRATE: 'HYDRATE',
};

export const failure = (error: any) => {
  return {
    type: ACTIONS.FAILURE,
    error,
  };
};

export const fetchCurrencyData = () => {
  return { type: ACTIONS.CURRENCY_DATA };
};

export const currencyDataSccess = (data) => {
  return {
    type: ACTIONS.CURRENCY_DATA_SUCCESS,
    data,
  };
};
