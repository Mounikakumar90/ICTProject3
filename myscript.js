function validateForm() {
debugger;
    var x = document.forms["registerForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    var msg="";
    var success=true;
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        msg = msg+"Please enter a valid e-mail address \n";
        success= false;
    }
    x = document.forms["registerForm"]["firstname"].value;
    if(x ==="") {
   	msg = msg+ "Please enter a valid first name \n";
        success= false;
    }
    x = document.forms["registerForm"]["lastname"].value;
    if(x ==="") {
   	msg=msg+"Please enter a valid last name";
        success= false;
    }
   if(success===false) {
   	alert(msg)
   }
   return success;
}

function register() {
  if(validateForm() === true) {       
    window.open('Congrats.html','Welcome to Spice House Loyalty','width=400, height=150');
  }

}	