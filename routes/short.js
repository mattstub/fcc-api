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
router.post('/', async (req, res) => {
    const client_url = req.body.url
    const suffix = shortid.generate()
    
    // If URL is not valid, an error JSON object will be displayed, matching criteria
    if(!validateURL(client_url)) {
        res.status(401).json({ error: 'invalid url' })
    // Else If the URL is valid, Search for Existing
    } else {
        try {
            let findURL = await ShortURL.findOne({ original_url: client_url })
            // If URL exists in DB, return existing object
            // Set JSON meeting freeCodeCamp criteria
            if(findURL) {
                res.json({
                    original_url: findURL.original_url,
                    short_url: findURL.short_url
                })
            // Else If the URL does not exist in DB, create new object and save to DB
            // JSON meeting freeCodeCamp criteria will be displayed upon save
            } else {
                findURL = new ShortURL({
                    original_url: client_url,
                    short_url: suffix
                })
                await findURL.save()
                res.json({
                    original_url: findURL.original_url,
                    short_url: findURL.short_url                    
                })
            }
        } catch (err) {
            console.error(err)
            res.status(500).json('Server error...')
        }
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
