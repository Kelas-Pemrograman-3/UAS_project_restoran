const admin = require('express')()
const adminController = require('../controller/cadmin')


admin.post('/login', (req, res) => {
  adminController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

admin.post('/register', (req, res) => {
  adminController.postadmin(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = admin