var login = document.getElementById("login"),
	modal = document.getElementById("modal-login"),
	closex = document.getElementById("close");
	
login.onclick = function(){
	modal.style.display = "block";
}
closex.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function onSignIn(googleUser) {
	
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

document.getElementById("btn-submit").onclick = function(){
	var email = document.getElementById("txtemail").value;
	var pass = document.getElementById("txtpass").value;
	var i;
	var acc= account;
    for(i = 0; i<acc.length; i++) {
        if(account[i].email == email && account[i].passwd == pass)
			alert("login");
    }
}
	
	
	