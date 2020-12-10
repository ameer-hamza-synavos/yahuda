const mongoose = require('mongoose')

mongoose
    .connect('mongodb://notifications-db:27019/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db