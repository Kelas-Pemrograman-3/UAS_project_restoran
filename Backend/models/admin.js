const mongoose = require('mongoose')
const schema = mongoose.Schema
const adminSchema = new schema({
  user: {
    type: String,
    index: {
      unique: true
    }
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('admin', adminSchema)