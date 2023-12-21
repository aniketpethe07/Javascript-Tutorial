/* Array in JS */

let arr = [0,1,2,3,4];
for (const iterator of arr) {
    console.log(arr[iterator]);
}

// Array Methods

let superheroes = ['Batman', 'Superman', 'Peacemaker', 'Flash', 'Aquaman']
// Push
superheroes.push('Wonder Women');
console.log(superheroes);
// Pop
superheroes.pop();
console.log(superheroes);
// toString
console.log(superheroes.toString());
console.log(superheroes);
// Unshift
superheroes.unshift('Black Adam');
console.log(superheroes);
// Shift
superheroes.shift();
console.log(superheroes);
// Slice 
console.log(superheroes.slice(1, 4));
// Splice will change original array  
console.log(superheroes.splice(2, 1,'Cyborg'));
console.log(superheroes);
