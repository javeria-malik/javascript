alert("hello")
var a=66;
var v=90;
var b=a>60 && a<90;
alert(b);
console.log(b);
var e=a>v && a<90;
console.log(e);
var e=a>v || a<90;
console.log(e);
var w=!(a>60);
console.log(w);
console.log(!0);
console.log(!!0);
if (a>20) {
    console.log("eligible");
}
else {
    console.log("not eligible");
}
if (a<10) {
    console.log("eligible");
}
else if (a>35) {
    console.log("n eligible");
}
else if (a<20) {
    console.log("m eligible");
}
else {
    console.log("not eligible");
}