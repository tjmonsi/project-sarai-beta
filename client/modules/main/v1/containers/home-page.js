import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import Header from './../components/header.jsx';
import HomePage from './../components/home-page.jsx';

const composer = ({}, onData) => {

  const header = React.createElement(Header)

  onData(null, {header})
}

export default composeAll(
  compose(composer),
  useDeps()
)(HomePage);