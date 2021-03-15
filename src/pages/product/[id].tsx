import Container from 'components/container';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';
import { wrapper } from 'store';
import { fetchCurrencyData } from 'store/actions/currency';
import { Product, RootState } from 'type/types';
import CurrencySwitch from 'components/currencySwitch';
import { useEffect, useState } from 'react';
import Header from 'components/header';

const ProductView = () => {
  const productList = useSelector((state: RootState) => {
    const {
      productData: { data },
    } = state;
    return data;
  });

  const currencyRates = useSelector((state: RootState) => {
    console.log(state);
    const {
      currencyReducer: { currency },
    } = state;
    return currency;
  });

  const error = useSelector((state: RootState) => {
    const {
      currencyReducer: { error },
    } = state;
    return error;
  });

  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    if (currencyRates) setShowPrice(true);
  }, [currencyRates]);

  const router = useRouter();
  const { id } = router.query;
  const selctedProduct: Product = productList.find((product) => String(product.id) === id);

  const { title, description, image, price, category } = selctedProduct || {
    title: '',
    description: '',
    image: '',
    price: '',
    category: '',
  };

  return selctedProduct ? (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <Header></Header>
      {error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <Container cssName="productpage">
          <h1>{title}</h1>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="col">
              <img src={image} alt={title}></img>
            </div>
            <div className="col">
              <p>{description}</p>
              <b>Price: {showPrice && <CurrencySwitch price={price}></CurrencySwitch>}</b>
            </div>
          </div>
        </Container>
      )}
    </>
  ) : null;
};

export default ProductView;

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const _store: any = store;

  const {
    currencyReducer: { currency },
  } = _store.getState();
  if (!currency) {
    _store.dispatch(fetchCurrencyData());
    _store.dispatch(END);
  }

  await _store.sagaTask.toPromise();
});
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
