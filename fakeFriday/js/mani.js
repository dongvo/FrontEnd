

 function getTimeInfo(timeend){
	var time = Math.floor((timeend.getTime() - (new Date().getTime()))/1000);
	var scs = Math.floor(time % 60);
	var mis = Math.floor((time/60) % 60);
	var hos = Math.floor((time/3600) % 24);
	var das = Math.floor((time/86400));
	return {
		'time': time,
		'seconds': scs,
		'minutes': mis,
		'hours': hos,
		'dates': das
	}
}
var nbdate = document.getElementById('nbdate'),
		nbhour = document.getElementById('nbhour'),
		nbminute = document.getElementById('nbminute'),
		nbsecond = document.getElementById('nbsecond');
function run(timeend){
	if((timeend.getTime() - (new Date().getTime())) <=0){
		nbdate.innerHTML = 0;
		nbhour.innerHTML = 0;
		nbminute.innerHTML = 0;
		nbsecond.innerHTML = 0;
	}
	else{
		var interval = setInterval(function(){
			var t = getTimeInfo(timeend);
			
			nbdate.innerHTML = t.dates;
			nbhour.innerHTML = t.hours;
			nbminute.innerHTML = t.minutes;
			nbsecond.innerHTML = t.seconds;
			if(t.time <= 0)
				clearInterval(interval);
		},1000);
	}	
	
}

var timeend = new Date(2017,0,0,00,00,00,000);
run(timeend);

