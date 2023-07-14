//Question: 1

//Create an array of number and filter numbers which are not perfect squares.
console.log("-----Create an array of number and filter numbers which are not perfect squares-----");

const nums = [];
let n = 200;
for(let i=1; i<=n; i++){
    nums.push(i);
}
const result = nums.filter((num)=>{return(num**0.5===parseInt(num**0.5))});
console.log(result);



//Question: 2

// Create an array of names and filter names with length greater than 5.
console.log("------Create an array of names and filter names with length greater than 5-----");

const names1 = ['Virendra','Yash Vardhan','Raj','Vaibhav','Uday','Utkarsh'];
const result1=names1.filter((n)=>{return n.length>5});
console.log(result1);


//Question: 3

// Create an array of full names and use map to keep only first name.(use split function)
console.log("------Create an array of full names and use map to keep only first name.(use split function)------");
const names = ['Virendra Verma','Yash Vardhan Mishra','Akash kumar','Vaibhav Srivastava','Uday Vikram Singh','Yashika Yadav','Utkarsh Sinha','Vibhash Dwivedi'];
const result2=names.map((n)=>{return n.split(" ")[0]});
console.log(result2);

 
//Question: 4


// Create a function to print all prime numbers in given range parameters
console.log("-------Create a function to print all prime numbers in given range parameters------")

const l = 2;
const h = 100;
for (let i = l; i <= h; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


