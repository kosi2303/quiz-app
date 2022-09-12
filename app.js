const ejs = require('ejs')
const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')

const app = express()




app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))

app.use('/data', express.static('data'));
app.use(express.urlencoded({extended: true}));


const mongodb = "mongodb://localhost:27017/"


const quizFileDir = fs
  .readdirSync("./data")
  .filter((name) => name.endsWith(".js"));

const quizzes = [];

for (const file of quizFileDir) {
  const quizFile = require(`./data/${file}`);
  quizzes.push({
    title: quizFile.quizData.title,
    slug: file.replace(".js", "")
  });
}




//routes
app.get("/", (req, res) => {
    res.render("index.ejs", {quizzes});
});
  
app.get("/quiz", (req, res) => {
  res.render("quiz.ejs", { query: req.query.name });
});

app.get('/register', (req, res)=>{
  res.render('register.ejs')
})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`App started on port 3000 ${port}`);
})