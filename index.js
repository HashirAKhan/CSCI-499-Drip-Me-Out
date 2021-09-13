const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {api_key} = require("./key/key.json");

const app = express();

let weather_status = "";
let low = "";
let high = "";

app.use(bodyParser.urlencoded());

app.post('/zipcode', (req, res) => {
   if (req.body.zipcode)
   {
      get_current_weather(req, res);
   }
   else {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(`<h1>404 Page Not Found</h1>`);
      res.end();
   }
});

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "html/form.html");
 });

app.listen(3000);

function get_current_weather(req, res){
   let endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${req.body.zipcode}&appid=${api_key}`;
   https.request(`${endpoint}`, {method:"GET"}, process_stream).end();
   function process_stream(weather_stream){
      let weather_data = "";
      weather_stream.on("data", chunk => weather_data += chunk);
      weather_stream.on("end", () => {
         serve_results(weather_data, res);
      });
   }
}

function serve_results(weather_data, res){
   weather = JSON.parse(weather_data);
   low = ((weather.main.temp_min - 273.15) * 9) / 5 + 32;
   high = ((weather.main.temp_max - 273.15) * 9) / 5 + 32;
   weather_status = weather.weather[0].main.toLowerCase();
   low = Math.round(low);
   high = Math.round(high);
   res.send(`The weather is ${weather_status} with a high of ${high} and a low of ${low}.`);
}