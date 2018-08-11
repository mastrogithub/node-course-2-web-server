const express = require('express');
const hbs = require('hbs');

var app = express();

const PORT = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use( express.static(__dirname + '/public') );

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.get('/',(req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to Home page!'
  });
});

app.get('/about',(req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page'
  });
});

app.listen(3000,() =>{ console.log(`app listening at port: ${PORT}`)});
