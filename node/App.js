const express = require('express')
const app = express();
const port = 4500

var route =  require('./route')
app.use('/',route)


  


app.listen(port,()=>{
  console.log(`App is listing at http://localhost:${port}`);
})