import './style.css';

// required by angular and before import qiankun.
import 'zone.js/dist/zone';

import {
  addGlobalUncaughtErrorHandler,
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start,
} from 'qiankun';
import { remotes } from './remotes';
import { Env } from './types';

const currentEnv = __MODE__ || Env.Dev;

console.log(`Looks like we are in ${currentEnv} mode!`);

const appContainerSelector = '#subapp-container';

const apps = remotes.map((remote) => ({
  name: remote.name,
  entry: remote.entryMap[currentEnv as  Env],
  container: appContainerSelector,
  activeRule: remote.path,
}));

(window as any).__APPS__ = apps;

registerMicroApps(apps, {
  beforeLoad: [
    (app: any) => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      return Promise.resolve();
    },
  ],
  afterMount: [
    (app: any) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      return Promise.resolve();
    },
  ],
  afterUnmount: [
    (app: any) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      return Promise.resolve();
    },
  ],
});

addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error(event);
});

setDefaultMountApp('app-angular');

start();

runAfterFirstMounted(() => {
  console.log('[HostApp] first app mounted');
});

// console.log('Built at ' + BUILT_AT);
