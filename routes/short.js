const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const shortid = require('shortid')
const ShortURL = require('../models/suffix.js')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

function validateURL(url) {
    // Checks to see if it is an actual url
    // Regex from https://gist.github.com/dperini/729294
    var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regex.test(url);
}

// Route - Index Page for Information Purposes
router.get("/landing", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'short.html'))
})

router.post('/', (req, res) => {
    let client_url = req.body.url
    let suffix = shortid.generate()
    let newURL = new ShortURL({
        original_url: client_url,
        short_url: suffix
    })
    if(validateURL(client_url)) {
        newURL.save((err, doc) => {
            if(err) return console.error(err)
            res.json({ 
                'original_url': newURL.original_url,
                'short_url': newURL.short_url
            })
        })
    } else {
        res.json({ error: 'invalid url' })
    }
})

router.get('/:suffix', (req, res) => {
    ShortURL.find({suffix: req.params.suffix}).then(foundURLs => {
        res.redirect(foundURLs[0].original_url)
    })
})

module.exports = router
