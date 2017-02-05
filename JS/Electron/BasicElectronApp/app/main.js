/***********************************
BASE ELCTRON LOGIC
***********************************/

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
var ipc = electron.ipcMain;

/**
*
* @event : Hook into application load
*
*/
app.on('ready', ()=>{

  //Declare window varible
  var appWindow, infoWindow;

  /* DEFINE APLPLICATION WINDOWS
  -----------------------------*/

  appWindow = new BrowserWindow({
    show: false
  });
  appWindow.loadURL(`file://${__dirname}/index.html`);

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false,
    transparent: true,
    frame: false
  });
  infoWindow.loadURL(`file://${__dirname}/info.html`)

  /* HOOK INTO WINDOW RUNTIME
  -------------------------*/

  //On application run render both windows when appWindow
  //fully loaded.
  appWindow.once('ready-to-show', ()=>{
    appWindow.show();
    setTimeout(()=>{
      infoWindow.show();
      //setTimeout(()=>{ infoWindow.hide(); },2000)
    },2000)
  });

  /* IPC EVENTS HOOKS
  -------------------*/

  //Close info window when IPC window
  ipc.on('closeInfoWindow', (event,arg)=>{
    event.returnValue = '';
    infoWindow.hide();
  });



});
