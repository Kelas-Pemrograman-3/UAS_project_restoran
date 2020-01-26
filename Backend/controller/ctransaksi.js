const transaksiModel = require('../models/transaksi')

exports.posttransaksi = (data) =>
  new Promise((resolve, reject) => {
    transaksiModel.create(data)
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Input Data'
        })
      }).catch(() => {
        reject({
          error: true,
          pesan: 'Gagal Input Data'
        })
      })
  })


exports.getalltransaksi = () =>
  new Promise((resolve, reject) => {
    transaksiModel.find()
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Mengambil Data',
          data: res
        })
      }).catch(() => {
        reject({
          error: true,
          pesan: 'Gagal Mengambil Data'
        })
      })
  })

exports.updatetransaksi = (data, id) =>
  new Promise((resolve, reject) => {
    transaksiModel.updateOne({
        _id: id
      }, data)
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Update Data Transaksi'
        })
      }).catch(() => {
        reject({
          error: false,
          pesan: 'Gagal Update Data Transaksi'
        })
      })
  })

exports.deletetransaksi = (id) =>
  new Promise((resolve, reject) => {
    transaksiModel.deleteOne({
      _id: Object(id)
    }).then(() => {
      resolve({
        error: false,
        pesan: 'Berhasil Menghapus Data Transaksi',
      })
    }).catch(() => {
      reject({
        error: false,
        pesan: 'Gagal Menghapus Data Transaksi',
      })
    })
  })