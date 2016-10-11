

$(document).ready(function(){
	
	var inputUser = $('#txtUser'),
		inputPass = $('#txtPass'),
		inputRepass = $('#txtRepass'),
		inputEmail = $('#txtEmail');
	var error = $('#alert-error'),
		btn = $('#btn-regis');
	var erhtml, err = true;
	var e =0, u=0, p=0,rp=0;
	var validate = {
		validateEmail: function(email){
			var em = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i;
			return em.test(email);
		},
		
		validatePass: function(passwd){
			var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&$-_])[A-Za-z\d$@$!%*?&$-_]{8,}$/i;
			return pass.test(passwd);
		},
		
		validateRePass: function(pass, repass){
			if(pass === repass)
				return true;
			else 
				return false;
		}
	}
		
	var lbError ={
		mail: 'email co dang abc@def.xyz',
		passwd: 'password co 0-9, a-z, A-Z, @!%*?&$-_',
		repass: 'password khong trung',
		user: 'username phai lon hon 6 ki tu',
		requied: 'Hay dien cac o can thiet'
	}
	function addLB(label){
		var temp = '<div>' + label + '</div>';
		return temp;
	};
	
	var check = {
		init: function(){
			if(this.checkEmail() && this.checkPass() && this.checkRepass() && this.checkUser())
				return true;
			else return false;
		},
		checkEmail: function(){
			var valEmail = inputEmail.val();
			erhtml = error.html();
			if(!validate.validateEmail(valEmail)){
				error.html(addLB(lbError.mail));
				error.slideDown();
				return false;
			}
			else {
				error.slideUp();
				error.html('');
				return true;
			}
		},
		checkUser: function(){
			var valUser = inputUser.val();
			if(String(valUser).length < 6){
				error.html(addLB(lbError.user));
				error.slideDown();
				return false;
			}
			else {
				error.slideUp();
				error.html('');
				return true;
			}
		},
		checkPass: function(){
			var valPass = inputPass.val();
			var test = validate.validatePass(valPass);
			if(!test){
				error.html(addLB(lbError.passwd));
				error.slideDown();
				return false;
			}
			else {
				error.slideUp();
				error.html('');
				return true;
			}
		},

		checkRepass: function(){
			var valPass = inputPass.val();
				valRepass = inputRepass.val(),
				vali = validate.validateRePass(valPass, valRepass);
			if(!vali){
				error.html(addLB(lbError.repass));
				error.slideDown();
				return false;
			}
			else {
				error.slideUp();
				error.html('');
				return true;
			}
		}
	}

	inputEmail.keyup(function(){
		check.checkEmail();
	});
	inputUser.keyup(function(){
		check.checkUser();
	});
	inputPass.keyup(function(){
		check.checkPass();
	});
	inputRepass.keyup(function(){
		check.checkRepass();
	});
	btn.unbind('click').bind('click',function(){
		if(check.init()){
			alert("submit true");
			btn.unbind('click');
			$('#btn-regis').hide();
			$('#btn-save').show();
		}
	});
	$('#btn-save').off('click').on('click',function(){
		alert("saved");
	});
	
});
