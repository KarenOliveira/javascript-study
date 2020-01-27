console.log('Creating an Object Literal');

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules','10 things to make with marmite']
};
console.log(user);
console.log(user.name);
console.log('Age before:',user.age);
user.age = 35;
console.log('Age After:',user.age);
console.log(user['location']);


console.log(typeof user);