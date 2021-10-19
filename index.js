const express = require("express");
const path = require("path");
const ejs = require("ejs");
const bodyParser= require("body-parser");

const route = require('./routes/route.js');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

app.use('/find', route);
app.use('/', (req, res)=>{
    res.redirect('/find');
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
