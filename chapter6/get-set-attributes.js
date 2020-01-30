console.log('Getting and Setting Attributes');

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerHTML = 'TheNet Ninja Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','sucess');
mssg.setAttribute('style','color: green');