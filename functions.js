function addNums(a,b){
    var c = a+b;
    console.log(c);
};
addNums(2566,732723);
//console.log(c);
const getPercentage = function(m1,m2,m3,m4,m5){
    let t=m1+m2+m3+m4+m5;
    let result=(t*100)/500;
    console.log(result,'%');
}
getPercentage(70,80,90,60,80);

//new in ES6
const getFact = (num)=>{
    let f = 1;
for(let i=1; i<=num; i++){
    f*=i;
}
//console.log(f);
return f;
};
const result=getFact(5);
console.log(result);


