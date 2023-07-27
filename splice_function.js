// can add an element at specific place
// first argument show first element second sow how many elements should move third the elemnt want to add
var food=["pizza","burger","sandwich","fries"];
console.log(food);
food.splice(1,2,"brwonie");
console.log(food);
food.splice(1,0,"brwonie");
console.log(food)
for (var i=0;i<food.length;i++){
    console.log(food[i])
}
foo=[23,24,25,26,27,28]
var foods=foo.slice(1,3);
console.log(foods)
var qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
  ];
document.write(qualifications);