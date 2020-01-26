const mongoose = require('mongoose')
const Schema = mongoose.Schema

const minuman = new Schema({
  kodeminuman: {
    type: String,
    required: true
  },
  namaminuman: {
    type: String
  },
  hargaminuman: {
    type: String
  }
})

module.exports = mongoose.model('minuman', minuman)