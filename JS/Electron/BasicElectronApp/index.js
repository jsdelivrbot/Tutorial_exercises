/***********************************
Base electron file
***********************************/

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

/**
* @event : Hook into application load
*/
app.on('ready', ()=>{
  var appWindow, infoWindow;

  /* DEFINE APLPLICATION WINDOWS
  -----------------------------*/

  appWindow = new BrowserWindow({
    show: false
  });
  appWindow.loadURL('http://www.github.com/charlie301');

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false
  });
  infoWindow.loadURL(`file://${__dirname}/views/info.html`)

  /* HOOK INTO WINDOW RUNTIME
  -------------------------*/

  appWindow.once('ready-to-show', ()=>{
    appWindow.show();
    setTimeout(()=>{
      infoWindow.show();
      //setTimeout(()=>{ infoWindow.hide(); },2000)
    },2000)
  })

});
