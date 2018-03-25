const { remote } = require('electron');
window.interop = {
  getNodeVersion() {
    return process.versions.node;
  },
  focus() {
    return remote.getCurrentWindow().focus();
  }
};