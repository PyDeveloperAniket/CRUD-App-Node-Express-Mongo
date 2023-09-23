const mongoose = require('mongoose');

// const mongoURL = 'mongodb://127.0.0.1:27017/dec-CRUD';
mongoose.connect('mongodb://127.0.0.1:27017/dec-CRUD');
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in Connecting Database'));

db.once('open', ()=>{
    console.log("Connected to the DATABASE");
});

module.exports = db;
