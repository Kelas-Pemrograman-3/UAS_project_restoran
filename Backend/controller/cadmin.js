const adminModel = require('../models/admin')
const bcrypt = require('bcryptjs')

exports.login = (data) => 
  new Promise ((resolve, reject) => {
    adminModel.findOne({
      user: data.user
    }).then(res => {
      // console.log(res)
      if (res === null) {
        reject({
          error: true,
          pesan: 'User is not found'
        })
      } else {
        let passwordhash = res.password
        if (bcrypt.compareSync(data.password, passwordhash)) {
          resolve({
            error: false,
            pesan: 'Successfully',
            data: res
          })
        } else {
          reject({
            error: true,
            pesan: 'Your password is wrong'
          })
        }
      }
    })
  })

  exports.postadmin = (data) =>
  new Promise((resolve, reject) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    data.password = hash
    // console.log(data.password)
    adminModel.find({
      user: data.user
    }).then(hasil => {
      if (hasil.length > 0) {
        reject({
          error: true,
          pesan: 'User already exists'
        })
      }else{
        adminModel.create(data)
        .then(res => {
          resolve({
            error: false,
            pesan: 'Data input succeeded'
          })
        }).catch(() => {
          reject({
            error: true,
            pesan: 'Data input failed'
          })
        })
      }
    })
  })
})

// exports.postmahasiswa = (data) =>
//   new Promise((resolve, reject) => {
//   bcrypt.hash(data.password, 10, (err, hash) => {
//     data.password = hash
//     // console.log(data.password)
//     mahasiswaModel.find({
//       npm: data.npm
//     }).then(hasil => {
//       if (hasil.length > 0) {
//         reject({
//           error: true,
//           pesan: 'NPM Sudah Digunakan'
//         })
//       }else{
//         mahasiswaModel.create(data)
//         .then(res => {
//           resolve({
//             error: false,
//             pesan: 'Berhasil Input Data'
//           })
//         }).catch(() => {
//           reject({
//             error: true,
//             pesan: 'Gagal Input Data'
//           })
//         })
//       }
//     })
//   })
// })


// exports.getallmahasiswa = () =>
//   new Promise((resolve, reject) => {
//     mahasiswaModel.find()
//       .then(res => {
//         resolve({
//           error: false,
//           pesan: 'Berhasil Mengambil Data',
//           data: res
//         })
//       }).catch(() => {
//         reject({
//           error: true,
//           pesan: 'Gagal Mengambil Data'
//         })
//       })
//   })