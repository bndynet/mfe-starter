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

const appContainerSelector = '#subapp-container';

registerMicroApps(
  [
    {
      name: 'app-html',
      entry: '//localhost:5501/app-html/',
      container: appContainerSelector,
      activeRule: '/app-html',
    },
    {
      name: 'app-react',
      entry: '//localhost:3000',
      container: appContainerSelector,
      activeRule: '/app-react',
    },
    {
      name: 'app-angular',
      entry: '//localhost:4200',
      container: appContainerSelector,
      activeRule: '/app-angular',
    },
    {
      name: 'app-vue',
      entry: '//localhost:8082',
      container: appContainerSelector,
      activeRule: '/app-vue',
    },
  ],
  {
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
        console.log(
          '[LifeCycle] after unmount %c%s',
          'color: green;',
          app.name
        );
        return Promise.resolve();
      },
    ],
  }
);

addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error(event);
});

setDefaultMountApp('app-angular');

start();

runAfterFirstMounted(() => {
  console.log('[HostApp] first app mounted');
});

console.log('Built at ' + BUILT_AT);
