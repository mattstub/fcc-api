const mongoose = require('mongoose')

let ShortURLSchema = mongoose.Schema({
    short_url: String,
    original_url: String,
    suffix: String,
})

module.exports = mongoose.model('ShortURL', ShortURLSchema)
