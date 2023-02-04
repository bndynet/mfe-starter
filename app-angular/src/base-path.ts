import * as pkg from '../package.json';

let path = '/';

if (window.__POWERED_BY_QIANKUN__) {
  const app = ((window as any).__APPS__ || []).find(
    (app: { name: string }) => app.name === pkg.name
  );
  if (app && app.activeRule && typeof app.activeRule === 'string') {
    path = app.activeRule;
  }
}

export const basePath = path;
