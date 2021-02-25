const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello");
    console.log("istek geldi");
});

app.get('/api/foodlist', (req, res) => {
    res.json({
        publicationID : "-MUasdw153w1g5"
    });
    console.log("istek geldi 2");
});

app.listen(port, error => {
    if(error){
        console.log(error);
    }
    else{
        console.log("Listening on port 9000...");
    }
})