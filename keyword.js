age = 30;
if(age>18){
    console.log("eligible for DL");
    let x = 'this should be local';
    const pi = 3.14;
   // pi=3.15;
   var y = 'function scoped'
}
else{
    console.log("Not eligible for DL");
}
console.log(y);
console.log(y);
