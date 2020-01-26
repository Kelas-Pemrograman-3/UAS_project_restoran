const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  user: {
    type: String
  },
  nama: {
    type: String
  },
  alamat: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('user', userSchema)