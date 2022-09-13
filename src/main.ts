import { Component, createApp } from "vue";

import App from "./App.vue";
import Vuetify from "./plugins/vuetify";
import Router from "./router";

import "./plugins/webfontloader";

export const initApp = (component: Component, rootProps = undefined) =>
  createApp(component, rootProps).use(Router).use(Vuetify);

export default initApp(App).mount("#app");
