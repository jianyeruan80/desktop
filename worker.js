onmessage = function(e){
	console.log(e);
}
function timedCount() {
	
    img.src="http://"+ip+"/favicon.ico?"+new Date().getTime();
    self.postMessage(0);
    setTimeout("timedCount()",2500);
}

