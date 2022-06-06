// short.js
// URL Shortener Microservice for freeCodeCamp Back End Certification
// (https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)
// README file in Repository has conditions for working API

const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const shortid = require('shortid')
const ShortURL = require('../models/suffix.js')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

// Using Regex, validates the url to insure its a working url
// Regex from https://gist.github.com/dperini/729294
function validateURL(url) {

    var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regex.test(url);
}

// Route - Index Page for Information Purposes
router.get("/landing", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'short.html'))
})

// Route - POST API Endpoint
// Post a working URL to the endpoint, a new ShortURL model is created with criteria
// Original URL and ShortURL information is saved and pushed to mongoDB
router.post('/', (req, res) => {
    let client_url = req.body.url
    let suffix = shortid.generate()
    let newURL = new ShortURL({
        original_url: client_url,
        short_url: suffix
    })
    
    // If URL is valid, the record will be saved to the database
    // JSON meeting freeCodeCamp criteria will be displayed upon save
    if(validateURL(client_url)) {
        newURL.save((err, doc) => {
            if(err) return console.error(err)
            res.json({ 
                'original_url': newURL.original_url,
                'short_url': newURL.short_url
            })
        })
    // If URL is not valid, an error JSON object will be displayed, matching criteria
    } else {
        res.json({ error: 'invalid url' })
    }
})

// Router - GET API Endpoint
// Locate the correct shortened URL from the database
// Once located, redirect the webpage to the original_url
router.get('/:shorturl', (req, res) => {
    ShortURL.find({shorturl: req.params.shorturl}).then(foundURLs => {
        res.redirect(foundURLs[0].original_url)
    })
})

module.exports = router
