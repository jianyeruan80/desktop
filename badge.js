const electron = require('electron');
const remote = electron.remote;
const ipcRenderer = electron.ipcRenderer;

//setTimeout(function(){ console.log("xxx"+document.querySelector(".refresh")) }, 3000);

badge={
      close:function(){
      	   var exit=document.querySelector(".exit");
      	   exit.style.display="";
      	   exit.addEventListener('click', function(e) {
             		console.log(111111111111111111);
             		ipcRenderer.send('badge-changed',"refresh");
           })
      },
      refresh:function(){
 			var refresh=document.querySelector(".refresh");
      	     refresh.style.display="";
      	    
      		refresh.addEventListener('click', function(e) {
      			   console.log(33333333333333333333);
             	   ipcRenderer.send('badge-changed',"exit");
           })
      }

}