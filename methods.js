document.write("<h3>welcome to js <br> here is some imp method</h3><br>");
var sen="welcome th world of coding here is some important functions"
document.write(sen.charAt(7));
document.write(sen.charAt(5),"<br>");
document.write(sen.replace("th","the"));// it will replace only the first finding function 
// if we want to replace all the functions we should use
// /word/g
var sent="welcome to the world .... a world which is occupy all the peoples which are best for them selves not for others"
document.write("<br>",sent.replace("world","universe"));
// now we want to rplace all world in givem sentence we should use
document.write("<br>",sent.replace(/world/g,"universe"))
// while if you have capital letter for the same word you will use
var let="To be honest to be with"
document.write("<br>",let.replace(/to/g,"universe"));// it will replace to
document.write("<br>",let.replace(/to/i,"universe"))// now it will replace the capital one 
// to avoid case sensitive no matter it is or not
document.write("<br>",let.replace(/to/gi,"universe"));// it will replace all 2 