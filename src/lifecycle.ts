import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import AdminApp from "./AdminApp";
import App from './App'

/**
 * Main entry point, required by single-spa but we are focusing on parcels
 */
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];

/**
 * Renders the admin app
 */
const adminLifecycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AdminApp
});

export const AdminParcel = {
  bootstrap: [ adminLifecycle.bootstrap],
  mount: [ adminLifecycle.mount ],
  unmount: [ adminLifecycle.unmount ],
  update: [ adminLifecycle.update ]
};

