function getId(id) {
  return document.getElementById(id);
}
var datenow;
var Calendar = function(o) {
  this.divId = o.ParentID;
  this.DaysOfWeek = o.DaysOfWeek;
  this.Months = o.Months;
  
  var d = new Date();
  this.CurrentMonth = d.getMonth();
  this.CurrentYear = d.getFullYear();
  var f=o.Format;
  
  if(typeof(f) == 'string') {
    this.f  = f.charAt(0).toUpperCase();
  } else {
    this.f = 'M';
  }
};
Calendar.prototype.showCurrent = function() {
  this.Calendar(this.CurrentYear, this.CurrentMonth);
};

Calendar.prototype.nextMonth = function() {
  if ( this.CurrentMonth == 11 ) {
    this.CurrentMonth = 0;
    this.CurrentYear = this.CurrentYear + 1;
  } else {
    this.CurrentMonth = this.CurrentMonth + 1;
  }
  this.showCurrent();
};
Calendar.prototype.previousMonth = function() {
  if ( this.CurrentMonth == 0 ) {
    this.CurrentMonth = 11;
    this.CurrentYear = this.CurrentYear - 1;
  } else {
    this.CurrentMonth = this.CurrentMonth - 1;
  }
  this.showCurrent();
};

Calendar.prototype.Calendar = function(y,m) {
  typeof(y) == 'number' ? this.CurrentYear = y : null;
  typeof(y) == 'number' ? this.CurrentMonth = m : null;
  var firstDayOfCurrentMonth = new Date(y, m, 1).getDay();
  var lastDateOfCurrentMonth = new Date(y, m+1, 0).getDate();
	datenow = new Date();
  var dnow = datenow.getDate();
  var mnow = datenow.getMonth();
  var ynow = datenow.getFullYear();
   var now =(String(dnow+" ").concat(String(mnow+" "))).concat(String(ynow));
  var lastDateOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  document.getElementById("month").innerHTML = this.Months[m] + ' - ' + y 
  var html = '<table>';
  html += '<tr class="Week">';
	var data;
  for(var i=0; i < 7;i++) {
    html += '<th class="DaysOfWeek">' + this.DaysOfWeek[i] + '</th>';
  }

  html += '</tr>';
  var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;
  var cellvalue;

  for (var d, i=0, z0=0; z0<6; z0++) {
    html += '<tr>';
    for (var z0a = 0; z0a < 7; z0a++) {
      d = i + dm - firstDayOfCurrentMonth;
	  data = (String(d+" ").concat(String(m+" "))).concat(String(y));
      if (d < 1){
        cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;
        html += '<td class="prevmonth">' +(cellvalue) + '</td>';
      } else if ( d > lastDateOfCurrentMonth){
        html += '<td class="nextmonth">' + (p++) + '</td>';
      } else if( now == data){
		  html += '<td class="currentmonth now">' + (d) + '</td>';
	  }else {
        html += '<td class="currentmonth">' + (d) + '</td>';
        p = 1;
      }
      if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {
        z0 = 10;
      }
      i++;    
    }

    html += '</tr>';
  }

  html += '</table>';

  

  document.getElementById(this.divId).innerHTML = html;
};

window.onload = function() {
  var c = new Calendar({
    ParentID:"countour",

    DaysOfWeek:['MON','TUE','WED','THU','FRI','SAT','SUN'],

    Months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],

    Format:'dd/mm/yyyy'
  });

  c.showCurrent();
  
  getId('previous').onclick = function(){
    c.previousMonth();
  };

  getId('next').onclick = function(){
    c.nextMonth();
  };
  getId('today').onclick = function(){
	  alert("Now is : " +datenow.getDate()+ "-" + datenow.getMonth() + "-"+ datenow.getFullYear());
  };
}














