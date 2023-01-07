import './style.css';

// required by angular and before import qiankun.
import 'zone.js/dist/zone';

import { addGlobalUncaughtErrorHandler, registerMicroApps, start } from 'qiankun';

registerMicroApps(
  [
    {
      name: 'app-angular', // app name registered
      entry: '//localhost:4200',
      container: '#subapp-container',
      activeRule: '/app-angular',
    },
    {
      name: 'app-vue',
      //   entry: { scripts: ['//127.0.0.1:5173'] },
      entry: '//localhost:8082',
      container: '#subapp-container',
      activeRule: '/app-vue',
    },
  ],
  {
    beforeLoad: (app: any) => {
      console.log('before load', app.name);
      return Promise.resolve();
    },
    afterMount: (app: any) => {
      console.log('after mount', app.name);
      return Promise.resolve();
    },
  }
);

addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error(event);
});

start();

console.log('Built at ' + BUILT_AT);