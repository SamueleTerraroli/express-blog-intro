const express = require ('express');
const app = express();
const port = 3000;

const posts = require('./posts');

app.get('/', (req, res) =>{
    res.send('server del mio blog');
});
app.listen(port, ()=>{
    
})

