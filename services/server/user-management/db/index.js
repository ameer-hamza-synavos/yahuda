const mongoose = require('mongoose')

mongoose
    .connect('mongodb://user-management-db:27020/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db