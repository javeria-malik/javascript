document.write("<h1>slicing<h1>")
var sen="welcome to the universe of coding hope you will the enjoy the universe of coding";
document.write(sen.slice(2,8),"<br>");
document.write(sen.slice(-2));
document.write("<br>",sen.indexOf("universe"));
// if we want that the finding index should be start from particukar index we use indexOf and 
//also give specific index from which we cam start the finding
document.write("<br>",sen.indexOf("the"));
document.write("<br>",sen.indexOf("the",25));// here we can see the differemce the upper code find very 
//first value while the other will start from the specific index
// now the next function is lastindexOf in this we start to srach from the last
document.write("<br>",sen.lastIndexOf("the"));
document.write("<br>",sen.lastIndexOf("universe"));
// we can also pass parameter in this
document.write("<br>",sen.lastIndexOf("universe",-19));//since the universe is not found in specifued index so return -1
document.write("<br>",sen.lastIndexOf("jiya"))// if not found retturn -1