alert("welcome");
//getTime tell us about how mych milisec pass from 1970 to till this time
var date=new Date();
document.write(date.getTime(),"<br>");
//epoch time........ tell about the starting point from where count8ng f ms is start
var date=new Date(0);
document.write(date,"<br>");
//retriving and modify of date
var date=new Date("June 14 2019 10:45:25");
document.write(date.getFullYear(),"<br>");
// get method used to get the function while set method use to set function 
var date=new Date("June 14 2019 10:45:25");
date.setFullYear(2023);
document.write(date,"<br>");
//converting days of week to text
var daylist=["sun","mon","tue","wed","thurs","fri","sat"];
var date=new Date("June 14 2019 10:45:25");
var day=date.getDay();
var nameofday=daylist[day];
document.write(nameofday,"<br");
document.write(day);
var day1=new Date("June 14 2019 10:45:25");
var day2=new Date("June 20 2019 10:45:25");
var timediff=day2.getTime()-day1.getTime();
var days=timediff/(1000 * 60 * 60 *24);
document.write(days);
