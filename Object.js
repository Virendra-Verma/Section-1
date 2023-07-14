const user = {
    name : 'Virendra',
    email : 'vkverma@gmail.com',
    password : '78798',

};
console.log(user.email);
console.log(user.name);
console.log(typeof user);

console.log(user['password']);
user.address = 'Lucknow';
console.log(user);
user.password = 'hjgugugybiuiuk'
console.log(user);

for(let k of Object.keys(user)){
    console.log(k);
}
for(let k of Object.values(user)){
    console.log(k);
}
for(let k of Object.entries(user)){
    console.log(k);
}



const laptop = [ {brand : 'HP', model : 'Pavilion', price :69999, colors :['Black', 'Silver']},
 {brand : 'Lenevo', model : 'Thinkpad', price :56999, colors :['Black', 'Silver']},
 {brand : 'Asus', model : 'Ultrabook', price :53999, colors :['Silver', 'Blue']},
 {brand : 'HP', model : 'Elitebook', price :68999, colors :['Blue']}
];
//Syntex to get the price UltraBook
console.log(laptop[2].price);

//Syntex to replace silver color with gray in UltraBook

laptop[2].colors[0]='gray';
console.log(laptop);

// brand name 
for(let i of laptop){
    console.log(i.brand);
}0

// filter laptop price <60000
console.log(laptop.filter((lap)=>{return lap.price <60000}));

// Filter laptop color black
console.log(laptop.filter((lap)=>{return lap.colors.includes("Black")}));

