var day1=new Date("June 14 2019 10:45:25");
var day2=new Date("June 20 2019 10:45:25");
var timediff=day2.getTime()-day1.getTime();
var days=timediff/(1000 * 60 * 60 *24);
document.write(days);
