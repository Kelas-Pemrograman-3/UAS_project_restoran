const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transaksi = new Schema({
  namamakanan: {
    type: String
  },
  namaminuman: {
    type: String
  },
  jumlah: {
    type: String
  },
  total: {
    type: String
  },
  bayar: {
    type: String
  }
})

module.exports = mongoose.model('transaksi', transaksi)