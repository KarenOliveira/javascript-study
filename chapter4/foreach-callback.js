console.log('Foreach Method and Callback');

/* const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value =>{
    console.log(value);
}); */

let people = ['mario','luigi','ryu','shaun','chun-li'];

const logPerson = (person,index) => {
    console.log(`Index: ${index} Person: ${person}`);
};

people.forEach(logPerson);