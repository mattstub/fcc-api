const mongoose = require('mongoose')

let ShortURLSchema = mongoose.Schema({
    original_url: String,
    short_url: String
})

module.exports = mongoose.model('ShortURL', ShortURLSchema)
