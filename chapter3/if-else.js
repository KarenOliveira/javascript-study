console.log('If Else');
const password = 'p@ss';

if(password.length >= 12){
    console.log('That password is might strong!');
} else if(password.length >= 8){
    console.log('That password is long enough!');
}else{
    console.log('That password is not long enough!');
}