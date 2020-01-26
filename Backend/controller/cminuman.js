const minumanModel = require('../models/minuman')

exports.postminuman = (data) =>
  new Promise((resolve, reject) => {
    minumanModel.create(data)
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

exports.getallminuman = () =>
  new Promise((resolve, reject) => {
    minumanModel.find()
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

  exports.updateminuman = (data, id) =>
  new Promise((resolve, reject) => {
    minumanModel.updateOne({
        _id: id
      }, data)
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Update Data Minuman'
        })
      }).catch(() => {
        reject({
          error: false,
          pesan: 'Gagal Update Data Minuman'
        })
      })
  })

exports.deleteminuman = (id) =>
  new Promise((resolve, reject) => {
    minumanModel.deleteOne({
      _id: Object(id)
    }).then(() => {
      resolve({
        error: false,
        pesan: 'Berhasil Menghapus Data Minuman',
      })
    }).catch(() => {
      reject({
        error: false,
        pesan: 'Gagal Menghapus Data Minuman',
      })
    })
  })