const userModel = require('../models/user')
const bcrypt = require('bcryptjs')

exports.postuser = (data) =>
  new Promise((resolve, reject) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    data.password = hash
    // console.log(data.password)
    userModel.find({
      user: data.user
    }).then(hasil => {
      if (hasil.length > 0) {
        reject({
          error: true,
          pesan: 'User Sudah Digunakan'
        })
      }else{
        userModel.create(data)
        .then(res => {
          resolve({
            error: false,
            pesan: 'Berhasil Registrasi'
          })
        }).catch(() => {
          reject({
            error: true,
            pesan: 'Gagal Registrasi'
          })
        })
      }
    })
  })
})

exports.login = (data) =>
  new Promise((resolve, reject) => {
    userModel.findOne({
      user: data.user
    }).then(res => {
      if (res === null) {
        reject({
          error: true,
          pesan: 'Username Tidak Terdaftar'
        })
      } else {
        let passwordHash = res.password
        if (bcrypt.compareSync(data.password, passwordHash)) {
          resolve({
            error: false,
            pesan: 'Berhasil Login',
            data: res
          })
        } else {
          reject({
            error: true,
            pesan: 'Password Anda Salah'
          })
        }
      }
    })
  })
