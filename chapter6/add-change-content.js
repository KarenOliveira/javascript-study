console.log('Adding and Changing Page Content');

const paras = document.querySelectorAll('p');

/*paras.forEach(para=>{
    console.log(para.innerText);
    para.innerText = 'ninjas are awesome!';
});*/

const content = document.querySelector('.content');
content.innerHTML = '<h2>THIS IS A NEW H2</h2>'

const people = ['mario', 'luigi','yoshi'];

people.forEach(person=>{
    content.innerHTML += `<p>${person}</p>`;
});