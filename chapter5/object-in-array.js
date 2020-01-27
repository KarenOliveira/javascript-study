console.log('Object in Array');



let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.com',
    location: 'berlin',
    blogs: [{
        title: 'why mac & cheese rules',
        likes: 30
    },
    {
        title: '10 things to make with marmite',
        likes: 50
    }],
    logBlogs(){
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog.title,blog.likes);
        });
    }
};
user.logBlogs();