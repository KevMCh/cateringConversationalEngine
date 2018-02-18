var express = require('express');
var request = require('request');

var router = express.Router();

function getDailyMeals() {
  console.log("Daily Meals");
}

function getRecommendation() {
  console.log("Recommendation");
}

function setNotification() {
  console.log("Notification");
}

function setScore() {
  console.log("Score");
}

const ACTIONS = {
  "dailymeals": getDailyMeals(),
  "recommendation": getRecommendation(),
  "incidence": setIncidence(),
  "score": setScore()
};

const DAILYMEALS_API = '';
const HEADERS = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

function doRequest(options) {
  /*
  var options = {
      url     : DAILYMEALS_API,
      method  : '',
      jar     : ,
      headers : HEADERS
  }
  */

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });
}

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
