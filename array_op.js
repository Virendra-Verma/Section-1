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

console.log('----------using map function----------');

//using map function 
const result = nums.map((n)=>{return n**2});
console.log(result);


const prices = [1329, 38267, 4002, 402, 5793, 352];
console.log(1392*0.05+1392);
//using map function to add 5% GST to all price 

const GST =  prices.map((price)=>{return price*0.05+price});
console.log(GST);
const prices2 = ['$2423.23','$583.39','$63.99','$12.99'];
console.log(parseInt('$2423.23'.slice(1)));
const newPrice =prices2.map((price)=>(parseInt(price.slice(1))));
console.log(newPrice);

// using filtering function 
filtered = prices.filter((p)=>{return p>=500 && p<=5000});
console.log(filtered);

const laptops = ['Dell Vistro','Acer predator','Asus Vivobook','Lenovo Thinkpad', 'Apple Mackbook'];

console.log('Dell Vistro'.includes('Dell'));

//const Name = ['Dell','Acer','Asus','Lenovo','Apple'];
//console.log(laptops.includes(Name));

const keyword = 'asus';
const searchData = laptops.filter((title)=>{return title.toLowerCase().includes(keyword.toLowerCase())});
console.log(searchData);
