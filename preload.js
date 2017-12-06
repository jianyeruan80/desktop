const electron = require('electron');
const remote = electron.remote;
const ipcRenderer = electron.ipcRenderer;
const BrowserWindow = electron.BrowserWindow
homeFunction={
      close:function(){
      	   var exit=document.querySelector(".exit");
      	   if(exit){
      	   exit.style.display="";
      	   exit.addEventListener('click', function(e) {
               var win = remote.getCurrentWindow();
    			// if(win)win.close()
    			 win.minimize();

  				 
           })
      	 }
      },
      refresh:function(){
 			var refresh=document.querySelector(".refresh");
 			 if(refresh){
      	     refresh.style.display="";
      	     refresh.addEventListener('click', function(e) {
      	     	 var win = remote.getCurrentWindow();
    			 win.webContents.session.clearCache(function(){
    			 	win.reload();
  				 });
           })
      	 }
      }

}
function test123() {
	console.log(111111111111111)
	// body...
}