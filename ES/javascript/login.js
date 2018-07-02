function validateform(){   
		var email=document.getElementById('loginname').value;
		var password=document.getElementById('loginpassword').value;
  
		if (email==""){  
  			alert("Email can't be blank");    
		}		
		else if(password.length<6){  
  			alert("Password must be at least 6 characters long.");
  		}
  		else{
  			alert("Sucess")
  			frm.reset();
  		}  
  	event.preventDefault();
}  

function regValidateForm(){
		var passWordOne=document.getElementById('regpassword').value;
		var passWordTwo=document.getElementById('regrepassword').value;
		var mobileNUmber=document.getElementById('regnumber').value;
		
		if (passWordOne!=passWordTwo) {
			alert("Password mismatch");
		}
		else if (passWordOne.length<6) {
			alert("The Password Must be 6 Letters Long");
		}
		else if(mobileNUmber == 10){
			return true;
		}
		else if(mobileNUmber.length>10 || mobileNUmber.length<10){
			alert("Mobile Number Should be 10 digit");
		}
		else{
			alert("Sucess");
			frm.reset();
		}
	event.preventDefault();  
}

function dropDownClick(){
	var x=document.getElementById('listItems');

	if (x.className === "navigation") {
		x.className += " responsive";
	}
	else{
		x.className = "navigation";
	}
}