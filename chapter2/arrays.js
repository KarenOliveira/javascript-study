console.log('Arrays');


let ninjas = ['shaun' , 'ryu','chun-li'];
ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random =['shaun','crystal',30,20];
console.log(random.length);

//array methods
let result = ninjas.join(',');
//Put all array elements into a String separated by comma
console.log('join' + result);
console.log('Index of chun-li' + ninjas.indexOf('chun-li'));

//Concat takes an array and add to ninjas (int this case)
let concat = ninjas.concat(['teste']);
console.log('concat: '+concat);

//Push returns the last position on array and add parameter on last position
let push = ninjas.push('teste1')
console.log('push: '+push);
console.log('push result: '+ninjas);

let pop = ninjas.pop();
console.log('pop: '+pop);
console.log('pop result: '+ninjas);

