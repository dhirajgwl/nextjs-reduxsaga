export type CurrencyReducer = {
  error: object;
  currency: object;
};

export type ProductData = {
  data: Array<Product>;
  error: object;
};

export type RootState = {
  productData: ProductData;
  currencyReducer: CurrencyReducer;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
};
