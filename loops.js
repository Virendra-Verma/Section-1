for(let i=0; i<10; i++){
    console.log(i);
}
console.log('------------------');
for(let i=10; i>0; i-=2){
    console.log(i);
}



prime number is prime or not
let m=34;
let prime = true;
for(let i=2; i<m; i++){
    if(m%i===0){
        console.log('Not prime');
        prime=false;
        break;
    }
}
if(prime) console.log('prime')


for(i=100; i<=500; i++){
    if(i%7===0  && i%11===0){
        console.log(i);
    }
}

//wap to check if a number is perfect sq or not....
console.log(25**0.5);
let n = 25;
let sqrt = n**0.5;
//console.log(25**0.5==parseInt(26**0.5));
if(sqrt===parseInt(sqrt)){
    console.log('perfact Squere')
}else{
    console.log('not perfact Squere')
}
console.log(parseInt(26**0.5));



console.log('--------------------------------------------')

p=10;
while(p>0){
    console.log(p);
    p--
}
q=10;
do{  console.log(q);
    q--;
}while(q>0);
console.log('-------------------------------------')

let num = 3875285;
let reverse = 0;
while(num>0){
    let d = num%10;
    reverse = reverse*10+d;
    num = parseInt(num/10);


}
console.log(reverse);

