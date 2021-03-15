import { END } from 'redux-saga';
import { wrapper } from '../store';
import Head from 'next/head';
import { fetchProduct } from '../store/actions/product';
import { useSelector } from 'react-redux';
import Container from 'components/container';
import ProductCard from 'components/productCard';
import { RootState } from 'type/types';
import Header from 'components/header';

const Index = () => {
  const productList = useSelector((state: RootState) => {
    const {
      productData: { data },
    } = state;
    return data;
  });
  const error = useSelector((state: RootState) => {
    const {
      productData: { error },
    } = state;
    return error;
  });
  
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <Header></Header>
      {error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <Container cssName="homepage">
          <h1>Products</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {productList &&
              productList.map((product, index) => {
                return index < 10 ? (
                  <div className="col" key={index}>
                    <ProductCard product={product}></ProductCard>
                  </div>
                ) : null;
              })}
          </div>
        </Container>
      )}
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const _store: any = store;
  const {
    productData: { data },
  } = _store.getState();

  if (!data.length) {
    _store.dispatch(fetchProduct());
    _store.dispatch(END);
  }
  await _store.sagaTask.toPromise();
});

export default Index;
