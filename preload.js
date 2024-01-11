const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("e_notification", {
  sendNotification(msg) {
    ipcRenderer.send("notify", msg);
  },
});
