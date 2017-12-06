
const electron = require('electron');
const remote = electron.remote;
const ipcRenderer = electron.ipcRenderer;

window.addEventListener('message',function(e){
         var msg=e.data["msg"];
         if(msg=="loading"){
           wrap.style.cssText="display:none";
         }else if(msg=="exit"){
            window.close()
         }else{
         var win = remote.getCurrentWindow();
         win.webContents.session.clearCache(function(){
        	if(!win) return;win.reload();
        });
         }
},false);

/*var clearCathe = document.querySelector('#clearCathe');
clearCathe.addEventListener('click',function(){
     var win = remote.getCurrentWindow();
     win.webContents.session.clearCache(function(){
	 ipc.send('flash');
	
 });

})
*/
/*document.addEventListener("keydown", function (e) {
 
		if (e.which === 123) {
			remote.getCurrentWindow().toggleDevTools();
		} else if (e.which === 116) {
			location.reload();
		}
	});*/