const makanan = require('express')()
const makananController = require('../controller/cmakanan')

makanan.post('/postmakanan', (req, res) => {
  makananController.postmakanan(req.body)
    .then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})    

makanan.get('/getallmakanan', (req, res) => {
  makananController.getallmakanan()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})  

makanan.put('/updatemakanan/:id', (req, res)=>{
  makananController.updatemakanan(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

makanan.delete('/deletemakanan/:id', (req, res) => {
  makananController.deletemakanan(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = makanan