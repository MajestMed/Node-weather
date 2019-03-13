var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080; //run on port 8080
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('..\\Node-weather\\node_modules\\routes\\tempRoutes'); //importing route
routes(app); //register the route
app.listen(port); //Listen on port 8080

console.log('RESTful API server started on: ' + port);
/*
let request = require('request');

let apiKey = '31d05241c8003174b3d2d5df6ab6a5a4'; //My key for API at api.openweathermap.com
let zip = '20155'; //test zip code
let unit = 'imperial'; //temp Fahrenheit
let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}` //Call api to get weather

request(url, function (err, response, body) { //test in command line
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `TEST: It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});*/