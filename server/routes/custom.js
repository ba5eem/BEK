//jshint esversion: 6
const express     = require('express');
const Pusher      = require('pusher');
const app         = express();
const moment      = require('moment');
const route       = express.Router();
const gcal        = require('google-calendar');
const google      = require('googleapis');
const privatekey  = require('../config/privatekey.json');
let jwtClient     = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/calendar']);




route.post('/', (req,res) => {
  let time = req.body
  let date = req.body.month+req.body.day+"T";
  let start = date+req.body.start+':00';
  let end = date+req.body.end+':00';
  let endTime = end + '-'+req.body.end+':00';
  console.log(time)

  var event = {
    'title':req.body.title,
    'summary': req.body.summary,
    'location': "Manoa Innovation Center",
    'description': req.body.description,
    'start': {
      'dateTime': start + '-'+req.body.start+':00',
      'timeZone': 'America/Adak',
    },
    'end': {
      'dateTime': endTime,
      'timeZone': 'America/Adak',
    },
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
      ],
    },
  };

  jwtClient.authorize(function (err, tokens) {
    if (err) { console.log("Did not connect!", err);
     return; } 
    else { console.log("Successfully connected!");

      let token = tokens.access_token;
      let calendarId = 'cohortuser19@gmail.com';
      let calendar = google.calendar('v3');
        gcal(token).events.insert(calendarId,event, function(err,data){
          if(err) console.log(500,err);
          
            return calendar.events.list({
              auth: jwtClient,
              calendarId: 'cohortuser19@gmail.com'
              }, function(err,response){
                  var events = response.items;
                  res.json(events);
          })
        })
     }
  });


})


module.exports = route;