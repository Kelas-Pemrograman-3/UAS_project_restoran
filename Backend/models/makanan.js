const mongoose = require('mongoose')
const Schema = mongoose.Schema

const makanan = new Schema({
  kodemakanan: {
    type: String
  },
  namamakanan: {
    type: String
  },
  hargamakanan: {
    type: String
  }
})

module.exports = mongoose.model('makanan', makanan)