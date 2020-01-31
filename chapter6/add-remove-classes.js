console.log('Adding & Removing Classes');

//const content = document.querySelector('p');
//console.log(content.classList);
//content.classList.add('error');

const paras = document.querySelectorAll('p');
paras.forEach(p=>{
    if(p.textContent.includes('sucess')){
        p.classList.add('sucess');
    }else if(p.textContent.includes('error')){
        p.classList.add('error');
    }
});