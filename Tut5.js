/* Functions in JS */

function myFunction(name){
    console.log(`Hello, ${name}`);
}
myFunction(`Aniket`);

// Arrow function

const myArrowFunction = (name) =>{
    console.log(`Hello, ${name}`)
}
myArrowFunction('Piyu')

//Array methods

//forEach loop in Array
let superheores = ['Batman', 'Superman', 'Spiderman'];
superheores.forEach(function helpers(superhero){
    console.log(superhero);
});
superheores.forEach((superhero) =>{
    console.log(superhero);
});
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((value) => {
    console.log(value**2);
})

//map 
let newSuperheroes = superheores.map((superhero) => {
    return superhero;
})
console.log(newSuperheroes);

//filter
let evenArray = arr.filter((number) => {
    return number%2===0;
})
console.log(evenArray);
let marks = [98,87,95,82,87,90,96,89];
let topper = marks.filter((mark) => {
    return mark>90;
})
console.log(topper);

// reduce
let sum = arr.reduce((result, current) => {
    return result + current;
}) 
console.log(sum);
let product = arr.reduce((result, current) => {
    return result * current;
}) 
console.log(product);