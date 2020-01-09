console.log('String 3 - Template Strings');

//template strings
const title = 'Best Reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

//template string way
let result = `The Blog called ${title} by ${author} has ${likes} likes`;

console.log(result);

//creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This Blog has ${likes} likes</span>
`;
console.log(html);