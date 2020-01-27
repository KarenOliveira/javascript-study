console.log('Add Methods');
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules','10 things to make with marmite'],
    login: function(){
        console.log('User logged in');
    },
    logout: function(){
        console.log('User logged out');
    }
};
user.login();
user.logout();