
/* CONFIGURE THE COUNTDOWN SCRIPT HERE */

var month = '15'; //  '*' for next month, '0' for this month or 1 through 12 for the month
var day = '17';   //  Offset for day of month day or + day
var hour = 23;    //  0 through 23 for the hours of the day
var tz = 0;       //  Offset for your timezone in hours from UTC
var lab = 'cdtimer';  //  The id of the page entry where the timezone countdown is to show
var msg = 'Countdown ended';

// redirection settings
var url = 'http://www.google.com/'; // redirection URL (empty string to disable)
var sec = 0;      // redirect on expiration: timeout (seconds) before redirect (0 to disable)

function start() {
    displayTZCountDown(setTZCountDown(month, day, hour, tz), lab);
    millisecondsEmulator();
}

window.onload = start;  // The start function can be changed if required

/* DO NOT EDIT PAST THIS LINE */

var msEmu = 999;
var msTimer = null;

function setTZCountDown(month, day, hour, tz)
{
    var toDate = new Date();
    if (month == '*') toDate.setMonth(toDate.getMonth() + 1);
    else if (month > 0)
    {
        if (month <= toDate.getMonth())toDate.setYear(toDate.getYear() + 1);
        toDate.setMonth(month-1);
    }
    if (day.substr(0,1) == '+')
    {
        var day1 = parseInt(day.substr(1));
        toDate.setDate(toDate.getDate()+day1);
    }
    else{
        toDate.setDate(day);
    }

    toDate.setHours(hour);
    toDate.setMinutes(0-(tz*60));
    toDate.setSeconds(0);
    var fromDate = new Date();
    fromDate.setMinutes(fromDate.getMinutes() + fromDate.getTimezoneOffset());
    var diffDate = new Date(0);
    diffDate.setMilliseconds(toDate - fromDate);
    return Math.floor(diffDate.valueOf()/1000);
}

function displayTZCountDown(countdown, countdowntimer)
{
    if (countdown < 0)
    {
        document.getElementById(countdowntimer).innerHTML = '<div class="expired">'+msg+'</div>';
        if(url != '' && sec > 0) {
            setTimeout('document.location.href="'+url+'"', sec*1000);
        }
    }
    else
    {
        var secs = countdown % 60;
        if (secs < 10) secs = '0' + secs;
        var countdown1 = (countdown - secs) / 60;
        var mins = countdown1 % 60;
        if (mins < 10) mins = '0' + mins;
        countdown1 = (countdown1 - mins) / 60;
        var hours = countdown1 % 24;
        var days = (countdown1 - hours) / 24;

        // reset milliseconds emulator
        clearTimeout(msTimer);
        msEmu = 999;
        millisecondsEmulator();
		
		var daysText = 'Дней';
		
		if(days == 1 || days == 21 || days == 31 || days == 41 || days == 51 || days == 61 || days == 71 || days == 81 || days == 91 || days == 101 || days == 111 || days == 121 || days == 131 || days == 141 || days == 151 ){
			daysText = 'Day';
		}else{
			daysText = 'Days';
		}
		
        var t = '';
        t += '<div class="days"><span class="daysNumber">'+days+'</span><span class="daysText"> ' + daysText +'</span></div>';
        t += '<div class="clock">';
        t += '    <div class="hr"><span class="hoursNumber">'+hours+'</span><span class="hoursText">H</span></div>';
       /* t += '    <div class="min">'+mins+'<span>minutes</span></div>';
        t += '    <div class="sec">'+secs+'<span>seconds</span></div>';
        t += '    <div class="ms" id="'+countdowntimer+'-ms">000<span>msec</span></div>';*/
        t += '</div>';
		
		/*Rounded TripleF*/
		
		var secRotate = secs*6;
		var minRotate = mins*6;
		
		$(document).find('.newBigDot').css('transform','rotate('+secRotate+'deg)');
		if(secs <= 0 || secs > 59){
			$(document).find('.newBigDot').css('opacity','0');
			setTimeout("$(document).find('.newBigDot').css('opacity','1')", 2000);
		}
		$(document).find('.newSmallDot').css('transform','rotate('+minRotate+'deg)');
		if((mins <= 0 || mins > 59) && (secs <= 0 || secs > 59)){
			$(document).find('.newSmallDot').css('opacity','0');
		}else{
			$(document).find('.newSmallDot').css('opacity','1');
		}
		
		/**/
		
        document.getElementById(countdowntimer).innerHTML = t;

        setTimeout('displayTZCountDown('+(countdown-1)+',\''+countdowntimer+'\');',999);
    }
}

function millisecondsEmulator()
{
    msEmu -= 29;
    if(msEmu <= 0) msEmu = 999;

    e = document.getElementById(lab+'-ms');
    if(!e) return;

    var ms = msEmu;
    if(msEmu < 100) ms = '0' + ms;
    else if(msEmu < 10) ms = '00' + ms;
    e.innerHTML = ms + '<span>msec</span>';

    msTimer = setTimeout('millisecondsEmulator();', 33);
}


