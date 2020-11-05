
function dataProcess(){
	var accountElement = document.getElementsByName("帳號");
	var passwordElement = document.getElementsByName("密碼");
	
	if (accountElement[0].value == account_pass.account) {
		alert("登入成功");
	} else {
		alert("登入失敗");
	}  
}
  	
	

