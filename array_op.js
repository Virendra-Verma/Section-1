const nums = [2,3,44,6,8]
//WAP to print square of all number in array
for(let i=0; i<nums.length; i++){
    console.log(nums[i]**2);
}

console.log('-----------------------------');
const newNums = [];
for(let n of nums){
    //console.log(n**2);
    console.log(newNums);
    newNums.push(n**2);

}
console.log(newNums);

