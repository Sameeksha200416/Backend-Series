//step 1 : create a folder
//2: move into the folder
//3: npm init -y
//4: open folder using vs code
//5: npm i express
//6: create server.js

const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log("server started as 3000")
});
