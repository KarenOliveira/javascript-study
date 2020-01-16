console.log('For loops');

/* for(let i = 0;i < 5;i++){
    console.log(i);
}
console.log('Loop Finished'); */

const names = ['shaun','mario','luigi'];

for(let i = 0;i<names.length;i++){
    let html = `<div>${names[i]}</div>`
    console.log(html);
}