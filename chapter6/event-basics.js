console.log('Events Basics');

/* const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    console.log('You clicked em');
}); */

const itens = document.querySelectorAll('li');

itens.forEach(item =>{
    item.addEventListener('click',event =>{
        event.target.style.textDecoration = 'line-through';
    });
});