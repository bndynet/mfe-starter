import { Remote, Env } from './types';

export const remotes: Remote[] = [
  {
    name: 'app-html',
    entryMap: {
      [Env.Dev]: '//localhost:5501/app-html/',
      [Env.Prod]: '/app-html/',
    },
    path: '/app-html',
  },
  {
    name: 'app-react',
    entryMap: {
      [Env.Dev]: '//localhost:3000',
      [Env.Prod]: '/app-react/',
    },
    path: '/app-react',
  },
  {
    name: 'app-angular',
    entryMap: {
      [Env.Dev]: '//localhost:4200',
      [Env.Prod]: '/app-angular/',
    },
    path: '/app-angular',
  },
  {
    name: 'app-vue',
    entryMap: {
      [Env.Dev]: '//localhost:8081',
      [Env.Prod]: '/app-vue/',
    },
    path: '/app-vue',
  },
];
