const user = require('express')()
const userController = require('../controller/cuser')

user.post('/postuser', (req, res) => {
  userController.postuser(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

user.post('/loginuser', (req, res) => {
  userController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = user
