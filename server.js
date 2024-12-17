const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const posts = require('./posts');

app.get('/', (req, res) => {
    res.send('server del mio blog');
});

app.get('/bacheca', (req, res) => {
    res.json({
        count: posts.length,
        posts: posts
    });
});

app.get('/img', (req, res) => {
    const postTitle = req.query.title;
    const post = posts.find(post => post.title === postTitle);
    
    if (post) {
        const imgName = path.basename(post.img); // Usa la proprietà 'img'
        const options = {
            root: path.join(__dirname, 'img')
        };

        res.sendFile(imgName, options);
    } else {
        res.status(404).send('Immagine non trovata');
    }
});

app.listen(port, () => {
    console.log(`Server avviato sulla porta ${port}`);
});
