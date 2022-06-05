const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    console.log('Route - /API/HELLO')
    res.json({greeting: 'hello API'})
})

module.exports = router
