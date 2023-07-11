const myarr = [133, 'nice', 22.989, true, console.log[23,35]];
console.log(myarr.length);
console.log(typeof myarr);

const movies = ['Avenerge', 'Flesh', 'WAR', '83', 'Fastx', 'Jawaan',"OMG"];

//indexing 
console.log(movies[2]);
console.log(movies[100]);
console.log(movies.at[-2]);
console.log(movies.indexOf['Fastx']);

//slicing

console.log(movies.slice(2,6));
console.log(movies.slice());

// adding new element 
movies.push('shershaah');  //add element at the end of the array
movies.unshift('Aatar');   //add element at the start of the array

console.log(movies);

// removing element 
movies.pop(); //remove element at the end of the array
movies.shift(); //remove element at the start of the array
console.log(movies);

//Write Syntax to execlude element on indexing 4 using slice functions 
movies.splice(3,2);
console.log(movies); 

// spread operator
console.log([...movies,'batman','batman 2','batman3']);
console.log([...movies.slice(0,4), ...movies.slice(5)]);
