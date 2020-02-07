console.log('Creating and Removing Elements');
const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');

items.forEach(item =>{
    item.addEventListener('click', e=>{
        e.target.remove();
    });
});

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    //ul.innerHTML += '<li>something new</li>';
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);
    //ul.prepend(li);
});