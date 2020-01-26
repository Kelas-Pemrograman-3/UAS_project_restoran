const makananModel = require('../models/makanan')

exports.postmakanan = (data) =>
  new Promise((resolve, reject) => {
    makananModel.create(data)
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

exports.getallmakanan = () =>
  new Promise((resolve, reject) => {
    makananModel.find()
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

exports.updatemakanan = (data, id) =>
  new Promise((resolve, reject) => {
    makananModel.updateOne({
        _id: id
      }, data)
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Update Data Makanan'
        })
      }).catch(() => {
        reject({
          error: false,
          pesan: 'Gagal Update Data Makanan'
        })
      })
  })

exports.deletemakanan = (id) =>
  new Promise((resolve, reject) => {
    makananModel.deleteOne({
      _id: Object(id)
    }).then(() => {
      resolve({
        error: false,
        pesan: 'Berhasil Menghapus Data Makanan',
      })
    }).catch(() => {
      reject({
        error: false,
        pesan: 'Gagal Menghapus Data Makanan',
      })
    })
  })