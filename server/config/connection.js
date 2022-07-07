const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/projects',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("Mongodb connected"))
.catch(err => console.log(err));

module.exports = mongoose.connection;
