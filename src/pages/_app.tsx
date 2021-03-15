import { wrapper } from '../store';
import { AppProps } from 'next/app';
import 'bootstrap/scss/bootstrap.scss';
import './style.scss';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default wrapper.withRedux(App);
