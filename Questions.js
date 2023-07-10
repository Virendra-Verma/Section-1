Question: 1

//  WAP to print all perfect squares in range of 50 - 350

for(let i=50; i<=350; i++){
let sqrt = i**0.5;
if(sqrt===parseInt(sqrt)){
    console.log(i+ ' is perfect Squere');
    }
}



Question: 2
// WAP to convert Celsius to Fahrenheit and vice versa

let Fahrenheit = 51;

console.log('The celsius of ' + Fahrenheit+ ' is ' +(Fahrenheit-32)*(5/9));

let Celsius = 36.66;

console.log('The Fahrenheit of ' + Celsius+ ' is '+((Celsius*(9/5))+32));




Question: 3

// WAP to check if number is palindrome
let num = 7667;
let rev = 0;
let temp = num;
while(num>0){
    let d = num%10;
    rev = rev*10+d;
    num = parseInt(num/10);
}
if(rev === temp){
    console.log('Palindrome number');
}else{
    console.log('Not Palindrome');
}



Question: 4

// WAP to print sum of all digits of a number

let n = 5674;
var sum = 0;
while(n>0){
    sum = sum + n % 10;
    n = parseInt(n / 10);
}
console.log(sum);




Question: 5

// WAP to print Fibonacci series.

let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);
let sum;
for(let i=1; i<=5; i++){
sum = n1+n2;
console.log(sum);
n1=n2;
n2=sum;
}


