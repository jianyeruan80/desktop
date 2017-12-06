window.addEventListener('message',function(e){
	        console.log(e.data)
         var msg=e.data["msg"];
         if(msg=="loading"){
        //   wrap.style.cssText="display:none";
         }else if(msg=="exit"){
            window.close()
         }else{
            // var win = remote.getCurrentWindow();
     //win.webContents.session.clearCache(function(){
     //ipc.send('flash');
  
 //});
         }
},false);