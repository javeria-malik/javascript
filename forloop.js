console.log("before");
for (var i=0;i<5;i++) {
    if(i==3){
        break;
    }
        console.log("i="+i);
    
}
console.log(" will skip at 3 after");
for (var i=0;i<5;i++) {
    if(i==3){
        continue;
    }
        console.log("i="+i);
    
}
var num=12;
for (i=2;i<num;i++) {
    var result=num%i;
    if (result==0) {

        console.log("number is not prime"+num +"i=" +i);
    }
}
var num=13;
for (i=2;i<num;i++) {
    var result=num%i;
    if (result==0) {

        console.log("number is not prime"+num +"i=" +i);
    }
}
console.log("the method of taking from user input")
var num=parseInt(prompt("please enter number"));
for (i=2;i<num;i++) {
    var result=num%i;
    if (result==0) {

        console.log("number is not prime"+num +"i=" +i);
    }
}


