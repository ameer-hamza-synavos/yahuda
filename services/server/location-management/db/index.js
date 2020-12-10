const mongoose = require('mongoose')

mongoose
    .connect('mongodb://location-management-db:27018/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db