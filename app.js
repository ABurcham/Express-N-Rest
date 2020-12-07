const express = require('express'); //Import the package

const app = express(); //We execute the package

//Middlewares (A function that executes when a specific route is hit)
app.use('/posts', () => {
    console.log('This is a middleware running');
});

//ROUTES
//"Get" sends us back a message 
//"Post" would send the message or give the message
//"Delete" is used to delete POSTS 
//"Patch" would update something such as a post
app.get('/',(req,res) => { 
    res.send('We are on home');
});

app.get('/posts',(req,res) => { 
    res.send('We are on posts');
});

//How do we start listening to the server
app.listen(3000);