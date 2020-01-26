const transaksi = require('express')()
const transaksiController = require('../controller/ctransaksi')

transaksi.post('/posttransaksi', (req, res) => {
  transaksiController.posttransaksi(req.body)
    .then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})    

transaksi.get('/getalltransaksi', (req, res) => {
  transaksiController.getalltransaksi()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})  

transaksi.put('/updatetransaksi/:id', (req, res)=>{
  transaksiController.updatetransaksi(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

transaksi.delete('/deletetransaksi/:id', (req, res) => {
  transaksiController.deletetransaksi(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = transaksi