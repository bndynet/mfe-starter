declare module '*.svg' {
  const content: any;
  export default content;
}

declare var PRODUCTION: boolean;
declare var BUILT_AT: string;


declare interface Window {
  __APPS__: any[];
}
