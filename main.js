const electron = require('electron')
// Module to control application life.
const app = electron.app
const globalShortcut=electron.globalShortcut;
const dialog=electron.dialog;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will


/*let win = new remote.BrowserWindow({
  webPreferences:{webSecurity:false},
  autoHideMenuBar:true
});
win.loadURL("http://light.hscloud.cn");
win.openDevTools();*/
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  globalShortcut.register("CommandOrControl+Alt+P",function(){
    mainWindow.webContents.openDevTools();
         /*dialog.showMessageBox({
            type:"info",
            message:"OK",
            detail:"xxxxxxxxxx",
            buttons:["ok"]
         })*/
  })
  mainWindow = new BrowserWindow({width:0, height:0,backgroundColor:'#444',webPreferences : {
      devTools: true
    }})
  mainWindow.setMenu(null);//M
  
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
 mainWindow.setFullScreen(true); //全屏
  mainWindow.webContents.openDevTools() //调试模式


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

 ipcMain.on('main', function(event, arg) {
  dialog.showMessageBox({
            type:"info",
            message:"OK",
            detail:arg,
            buttons:["ok"]
         })
   /*let win = BrowserWindow.getFocusedWindow();
        if(!win) return;
        win.reload();*/
});
/*ipcMain.on("badge-change",function(event,arg){
 dialog.showMessageBox({
            type:"info",
            message:"OK",
            detail:arg,
            buttons:["ok"]
         })
})*/

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
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
//exports.init=function(){
/*ipcMain.on("badge-change",function(event,arg){
 dialog.showMessageBox({
            type:"info",
            message:"OK",
            detail:arg,
            buttons:["ok"]
         })*/
     /*console.log("xxxxxxxxxxxxxx----xxxxxxxxxxxxx");
    console.log(event);
    console.log(value);
    console.log("xxxxxxxxxxxx========xxxxxxxxxxxxxxx");
    if(value=="close"){
      window.close();
    }else{
       var win = remote.getCurrentWindow();
         win.webContents.session.clearCache(function(){
          ipcRenderer.send('flash');
         })
    }*/
//}
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
