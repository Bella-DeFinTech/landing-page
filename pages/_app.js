import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel="icon" type="image/png" href="/favicons/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default appWithTranslation(MyApp)