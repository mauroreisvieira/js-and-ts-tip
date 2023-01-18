/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  var __DEV__: boolean;
  function isCool(): boolean;

  interface Window {
    wow: () => void;
  }

  namespace NodeJS {
    interface ProcessEnv {
      WOW: "COLL_STUFF";
    }
  }
}

window.wow();

process.env.WOW;

globalThis.__DEV__ = true;
globalThis.isCool = () => true;

export {};
