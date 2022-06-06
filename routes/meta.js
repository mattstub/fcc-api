// meta.js
// File Metadata Microservice for freeCodeCamp Back End Certification
// https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice
// README file in Repository has conditions for working API

const express = require('express')
const router = express.Router()
const path = require('path')

// Route - Index Page for Information Purposes
router.get("/landing", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'meta.html'))
})

module.exports = router
