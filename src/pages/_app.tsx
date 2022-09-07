// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';


import { ReactElement, ReactNode } from 'react';
// next
import { NextPage } from 'next';
import Head from 'next/head';
import App, { AppProps, } from 'next/app';
// utils

// contexts

import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
// theme
import ThemeProvider from '../theme';
// components

import ProgressBar from '../components/ProgressBar';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {

  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <CollapseDrawerProvider>

        <MotionLazyContainer>
          <ThemeProvider>

            <ProgressBar />
            {getLayout(<Component {...pageProps} />)}

          </ThemeProvider>
        </MotionLazyContainer>

      </CollapseDrawerProvider>
    </>
  );
}

// ----------------------------------------------------------------------


