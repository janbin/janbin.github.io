
function dataProcess(){
	var accountElement = document.getElementsByName("帳號");
	var passwordElement = document.getElementsByName("密碼");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			/*if (accountElement[0].value == account_pass.account) {
				alert("登入成功");
			} else {
				alert("登入失敗");
			} */
			document.write(this.responseText);	
		}
	
	};
	xhttp.open("GET", "data.txt", true);
	xhttp.send();
	//document.write("function loaded");
	
	
}
  	
	

