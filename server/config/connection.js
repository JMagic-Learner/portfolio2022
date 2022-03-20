const mongoose = require('mongoose');

mongoose.connect(
   'mongodb://localhost/2022Portfolio' || process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));

module.exports = mongoose.connection;
