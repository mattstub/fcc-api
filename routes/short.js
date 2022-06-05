const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const shortid = require('shortid')

const ShortURL = require('../models/suffix.js')
const { off } = require('process')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

// Route - Index Page for Information Purposes
router.get("/landing", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'short.html'))
})
/*
router.get('/new', (req, res) => {
    console.log('GET /NEW request')
    console.log(`${req.params} <= req.params`)
    res.json({ 'process' : 'request processed'})
})
*/
router.post('/new', (req, res) => {
    let client_url = req.body.url
    let suffix = shortid.generate()
    let newURL = new ShortURL({
        short_url: __dirname + '/api/shorturl/' + suffix,
        original_url: client_url,
        suffix: suffix,
    })
    newURL.save((err, doc) => {
        if(err) return console.error(err)
        console.log('Document inserted successfully!')
        res.json({ 
            'saved': true,
            'original': newURL.original_url,
            'suffix': newURL.suffix,
            'short url': newURL.short_url
        })
    })
})

router.get('/:suffix', (req, res) => {
    ShortURL.find({suffix: req.params.suffix}).then(foundURLs => {
        res.redirect(foundURLs[0].original_url)
    })
})

module.exports = router
