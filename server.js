// server.js
// API Timestamp Microservice for freeCodeCamp Back End Certification
// https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice
// README file in Repository has conditions required for working API
// Completed 06/02/2022 by Matt Stubenhofer

// Initialize Project Components
// CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// Ability for FCC to test code, with CORS enabled
const express = require('express')
const cors = require('cors')
const RateLimit = require('express-rate-limit')
const app = express()
const port = process.env.PORT || 3000
const limiter = new RateLimit({ windowMs: 1*60*1000, max: 5 })    // Setup rate limiter, Max 5 requests per minute

app.use(cors({optionsSuccessStatus: 200}))                        // Supports Some Legacy Browsers
app.use(express.static('public'))
app.use(limiter)                                                  // Apply rate limiter to all requests

// Route - Landing Page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

// Route - API Hello 
app.get("/api/hello", (req, res) => {
  console.log('Route - /API/HELLO')
  res.json({greeting: 'hello API'})
})

// Route - API Now Time Slot
// If no timestamp is given as a parameter, send JSON with current time formatted per specifications
app.get('/api', (req, res) => {
  let now = new Date()                                            // set date to current timestamp
  res.json({ 'unix': now.getTime(), 'utc': now.toUTCString() })   // format current timestamp into Unix & UTC
  console.log('Route - /API')                                     // *** Server Side - Route Mapping ***
})

// Route - API Timestamp Given
// If a timestamp is given as a parameter, follow the conditions below and format time per specifications
// 1.) If timestamp is a proper string (YYYY-MM-DD), send JSON with Unix & UTC Formats as per specifications
// 2.) If timestamp is in unix milliseconds, convert to proper formats and send JSON as specified
// 3.) If timestamp is invalid in any form, send JSON with error notifications
app.get('/api/:date_string', (req, res) => {
  const dateString = req.params.date_string     // initialize a timestamp string
  const dateUnix = dateString * 1               // convert timestamp string to number, handles unix timestamp
  let date                                      // initialize a date variable for formatting later

  if(isNaN(dateUnix)) {                         // If the timestamp passed is not a number, i.e. timestamp sent is a string YYYY-MM-DD
    date = new Date(dateString)                 // Set the date variable with a date object relative to the string passed
    console.log('Route - /API/YYYY-MM-DD')      // *** Server Side - Route Mapping ***
  } else {                                      // Else If the timestamp passed is a number, passed in unix milliseconds
    date = new Date(dateUnix)                   // Set the date variable with a date object relative to the milliseconds passed
    console.log('Route - /API/#############')   // *** Server Side - Route Mapping ***                                    
  }

  if(date == 'Invalid Date') {                                      // If the date/timestamp is not in the valid format or is not a valid date, return an error
    res.json({ error: 'Invalid Date' })                             // *** Client Side - Reponse Error, Invalid Date  
    console.log('Route - Invalid Date')                             // *** Server Side - Route Mapping ***
  } else {                                                          // Else If the date/timestamp is valid, return formatted JSON
    res.json({ 'unix': date.getTime(), 'utc': date.toUTCString() }) // *** Client Side - Response JSON Formatted per Specifications
    console.log('Route - Valid Date')                               // *** Server Side - Route Mapping ***
  }
})

// Server Open For Business
const listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
