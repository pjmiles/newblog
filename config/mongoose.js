const mongoose = require('mongoose');

const db = mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connected to Database')
});

module.exports = db