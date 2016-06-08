import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import Header from './../components/header.jsx';

const composer = ({}, onData) => {

  onData(null, {})
}

const inject = (context, actions) => ({
  getHeaderLinks: actions.main.getHeaderLinks,
  context: () => (context)
})

export default composeAll(
  compose(composer),
  useDeps(inject)
)(Header);