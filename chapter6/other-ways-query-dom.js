console.log('Other ways to querying the DOM');
const title = document.getElementById('page-title');
console.log('by Id',title);

const errors = document.getElementsByClassName('error');
console.log('by Class',errors);

const paras = document.getElementsByTagName('p');
console.log('by Tag',paras);