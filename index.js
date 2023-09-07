const express=require('express');
const port=8000;
const app=express();
const userRouters=require('./router/users')
app.use('/',userRouters);

app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
    }
    console.log(`server is running on port: ${port}`);
})

//output
//{"users":{"Data":[{"id":1,"name":"aleefa"},{"id":2,"name":"ameena"},{"id":3,"name":"anshu"}]}}

// PS C:\Users\aleef\OneDrive\Desktop\Backend> npm start
// npm ERR! Missing script: "start"
// npm ERR!
// npm ERR! Did you mean one of these?
// npm ERR!
// npm ERR! To see a list of scripts, run:
// npm ERR!   npm run

// npm ERR! A complete log of this run can be found in: C:\Users\aleef\AppData\Local\npm-cache\_logs\2023-09-07T04_19_59_864Z-debug-0.log
//to avoid this error bcz start script is missing here....
//  "start":"node index.js"



// PS C:\Users\aleef\OneDrive\Desktop\Backend> npm start

// > backend@1.0.0 start
// > node index.js

// server is running on port: 8000