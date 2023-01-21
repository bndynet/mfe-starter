const render = () => {
  document.querySelector('#app-html-container').innerHTML = '<h1>Hello, this is a pure html app.</h1>';
  return Promise.resolve();
};

((global) => {
  global['app-html'] = {
    bootstrap: (app) => {
      console.log(`${app.name} bootstrap`);
      return Promise.resolve();
    },
    mount: (app) => {
      console.log(`${app.name} mount`);
      return render();
    },
    unmount: (app) => {
      console.log(`${app.name} unmount`);
      return Promise.resolve();
    },
  };
})(window);