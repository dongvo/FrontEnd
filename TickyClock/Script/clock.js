
var d, hh, mm, ss, dd, MM, yyyy, time, date;
var Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
var setted = 0;
var hset, mset;

function Clock(){
	Clock.prototype.init.apply(this, arguments);
}
var set = getId('btn-set');
var stop = getId('btn-stop');
set.onclick = function(){
	setAlarm();
}
stop.onclick = function(){
	Clock.prototype.stopAlarm();
}

function setAlarm(){
	hset = getId('set-h').value;
	mset = getId('set-m').value;
	if(hset != '' && mset !=''){
		hset = parseInt(hset);
		mset = parseInt(mset);
		if(Clock.prototype.check(hset,mset)){
			setted = 1;
			getId('set-h').value = '';
			getId('set-m').value = '';
			console.log("Set : "+ hset + ":" + mset);
		}
		else {
			alert("try input again");
			setted = 0;
		}
	}
	
}

Clock.prototype ={
	//time in local
	init: function(){
		d = new Date();
		hh = d.getHours();
		mm = d.getMinutes();
		ss = d.getSeconds();
		dd = d.getDate();
		MM = d.getMonth();
		yyyy = d.getFullYear();
		if(hh <= 9){
			hh = '0'+hh;
			}
		if(mm <= 9){
			mm = '0'+mm;
		}
		if(ss <= 9){
			ss = '0'+ss;
		}
		
		if(setted === 1){
			Clock.prototype.timer(hset,mset);
		}
		
		time = hh + ":" + mm + ":" + ss;
		date = Month[MM] + " " + dd + " " + yyyy;
		getId('clock').innerHTML = time;
		getId('time').innerHTML = date;

		setTimeout(Clock.prototype.init, 1000);
	},
	//check hour and minutes
	check: function(h,m){
		if( h < 24 && m < 60)
			return true;
		else return false;
	},
	//function timer
	timer: function(h,m){
		if(hh == h && mm == m && ss == '00'){
			Clock.prototype.alarm();
		}
	},
	//play music when ontime
	alarm: function(){
		getId('alert').play();
	},
	//stop alarm
	stopAlarm: function(){
		getId('alert').pause();
		setted = 0;
		getId('alert').load();
	}
}
Clock();



















