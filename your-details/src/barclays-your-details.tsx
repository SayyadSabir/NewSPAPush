import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { Provider } from "react-redux";
// eslint-disable-next-line
interface Window {
  commonStore: {
    getStore: () => any;
  };
}

declare const window: Window;

const store = window.commonStore.getStore();
// eslint-disable-next-line no-console
console.log("Current state in Your Details:", store.getState());
// const store = getStore();
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <Provider store={store}>
      <Root />
    </Provider>
  ),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
