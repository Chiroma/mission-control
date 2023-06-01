const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

const disconnectDB = ()=>{
  return mongoose.disconnect()
}

module.exports = { connectDB, disconnectDB }
