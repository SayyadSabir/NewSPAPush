import { registerApplication, start, LifeCycles } from "single-spa";
import store from "./mystore";

declare global {
  interface Window {
    commonStore: any;
  }
}
interface UserState {
  name: string;
  address: string;
}
export const getStore = () => store;
export const setStore = (newState: UserState) => {
  console.log(newState, 'newState')
  store.dispatch({ type: 'SET_USER', payload: newState });
}
window.commonStore = {
  getStore,
  setStore,
};

registerApplication({
  name: "@barclays/mortgage-application",
  app: () => System.import<LifeCycles>("@barclays/mortgage-application"),
  activeWhen: (location) => location.pathname === "/",
  customProps: { store: window.commonStore },
});

registerApplication({
  name: "@barclays/your-details",
  app: () => System.import<LifeCycles>("@barclays/your-details"),
  activeWhen: (location) => location.pathname === "/your-details",
});

registerApplication({
  name: "@barclays/client-details",
  app: () => System.import<LifeCycles>("@barclays/client-details"),
  activeWhen: (location) => location.pathname === "/client-details",
});

registerApplication({
  name: "@barclays/barclays-mortgage",
  app: () => System.import<LifeCycles>("@barclays/barclays-mortgage"),
  activeWhen: (location) => location.pathname === "/barclays-mortgage",
});


start({
  urlRerouteOnly: true,
});
