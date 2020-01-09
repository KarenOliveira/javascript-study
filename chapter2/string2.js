console.log('String 2 - Common Methods');

//Common String Methods
let email1 = 'oliveira.karen@gmail.com';
let resultLastIndex = email.lastIndexOf('g');
console.log(resultLastIndex);

//Slice from index = first argument to index = second one
let resultSlice = email.slice(0,10);
console.log(resultSlice);

//Slice from index = first argument and a result is a string that is the second one sized
let resultSubstring = email.substr(1,10);
console.log(resultSubstring);

//Replace the first ocurrency of first argument for second one argument
let resultReplace = email.replace('a','w');
console.log(resultReplace);