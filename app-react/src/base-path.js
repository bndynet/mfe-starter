const { name } = require('../package.json');

let microApp;
let basePath = '/';

if (window.__POWERED_BY_QIANKUN__) {
  microApp = (window.__APPS__ || []).find(
    app => app.name === name
  );
  if (
    microApp &&
    microApp.activeRule &&
    typeof microApp.activeRule === 'string'
  ) {
    basePath = microApp.activeRule;
  }
}

export default basePath;