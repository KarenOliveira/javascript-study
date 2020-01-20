console.log('Arrow Functions');
const calcArea = radius =>3.14 * radius **2;
console.log(calcArea(5));

const greet =()=> 'Hello World';
console.log(greet());

const bill = (products,tax) =>{
    let total = 0;
    for(let i = 0;i<products.length;i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10,15,30],0.2));