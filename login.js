
function dataProcess(){
	var accountElement = document.getElementsByName("帳號");
	var passwordElement = document.getElementsByName("密碼");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		
		if (this.readyState == 4 && this.status == 200) {
			x = JSON.parse(this.responseText)
			if (accountElement[0].value == x.account) {
				alert("登入成功");
			} else {
				alert("登入失敗");
				alert("x.account");
			} 
		
		//	document.write(this.responseText);	
		}
	}
	
	xhttp.open("GET", "http://127.0.0.1:5000/data", true);
	xhttp.send();
	//document.write("function loaded");
}
	

  	
	

