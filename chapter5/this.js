console.log('This Keyword');

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules','10 things to make with marmite'],
    logBlogs: function(){
       console.log('This user has written the following blogs:');
       this.blogs.forEach(blog =>{
           console.log(blog);
       });
    }
};
user.logBlogs();