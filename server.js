const express = require('express');
const app = express();

app.use('/public',express.static('public'));
app.get('/',function(req,res){
    res.send('index.html',{ 
        root:__dirname   
    });
    /*res.send(__dirname );*/
});
app.listen(3000);
