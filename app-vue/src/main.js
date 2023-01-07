/* eslint-disable */

import './public-path';
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import routes from './router';

let router = null;
let instance = null;
let history = null;
function render(props = {}) {
  const { container } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/');
  router = createRouter({
    history,
    routes,
  });
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
  //   mode: 'history',
  //   routes,
  // });

  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
  // new Vue({ router,
  //   store,
  //   render: (h) => h(App),
  // }).$mount();
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}
