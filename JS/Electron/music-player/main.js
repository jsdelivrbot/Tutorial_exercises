/******************************************************************************
* @description : Create Main and render windows
*******************************************************************************/

"use strict";

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

require('electron-debug')({ showDevTools: true });
//require('electron-reload')(__dirname);

const path = require('path')
const url = require('url')

//reference the main window
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  //Main window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })

}//end of create window

//Render application when electron initialization complete
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
