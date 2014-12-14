function setPdcCookie(value, path) {
	if(!value || !path) return;

	var str = "pdc=" + escape(value);
	str += "; path=" + path;
	document.cookie = str;
};

function getPdcCookie(){
	if(!document.cookie) return;

	var cookies = document.cookie.split(';');
	for( var i = 0; i < cookies.length; i++){
		var cookie = cookies[i].replace(/^[\s�@]+|[\s�@]+$/g, '');
		if(cookie.indexOf('pdc=') != 0){
			continue;
		}
		var value = cookie.split('=')[1];
		return value.replace(/^[\s�@]+|[\s�@]+$/g, '');
	}
}

function removePdcCookie(path){
	if(!path) return;

	var expire = new Date();
	expire.setYear(1900);
	var str = "pdc=; path="+ path +"; expires=" + expire.toGMTString();
	document.cookie = str;
}
