import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import store from '../_redux/store';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
