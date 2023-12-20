/* Loops in JS */

//for loop
//while loop
//do-while loop

//for-of loop //used for array and strings
let str1 = "HarryPotter";
for(let val of str1){
    console.log(val);
}

//for-in loop
let vigilante = {
    name : 'Aniket Pethe',
    age : 22,
    SGPA : 7.5,
    isPass : true
};

for(let key in vigilante){
    console.log(vigilante[key]);
}

/* Strings in JS */
let str2 = 'Harry Potter';

//String inbuild properties

//string.length
console.log(str2.length);
console.log(str2[0]);

//Template lirerals
let obj = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3',
};
console.log(`This is a template literal ${obj.key2}`);

//String methods

let str3 = '    HarryPotter    ';
console.log(str3.toLowerCase());
console.log(str3.toUpperCase());
console.log(str3.trim());
console.log(str3.slice(3, 9));
console.log(str3.replace('Harry', 'James'));