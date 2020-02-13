import React from 'react';
import App from 'next/app';
import { Tina, TinaCMS } from 'tinacms';
import { GitClient } from '@tinacms/git-client';

class MyApp extends App {
  constructor() {
    super()
    const client = new GitClient('http://localhost:3000/___tina')
    this.cms = new TinaCMS({
      apis: {
        git: client,
      },
      sidebar: {
        hidden: process.env.NODE_ENV === "production"
      }
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Tina cms={this.cms}>
        <Component {...pageProps} />
      </Tina>
    )
  }
}

export default MyApp;
