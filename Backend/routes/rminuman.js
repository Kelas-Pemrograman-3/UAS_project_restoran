const minuman = require('express')()
const minumanController = require('../controller/cminuman')

minuman.post('/postminuman', (req, res) => {
  minumanController.postminuman(req.body)
    .then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})    

minuman.get('/getallminuman', (req, res) => {
  minumanController.getallminuman()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})  

minuman.put('/updateminuman/:id', (req, res)=>{
  minumanController.updateminuman(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

minuman.delete('/deleteminuman/:id', (req, res) => {
  minumanController.deleteminuman(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = minuman