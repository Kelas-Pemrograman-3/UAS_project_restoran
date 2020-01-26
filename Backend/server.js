const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000
const cors = require('cors')
const mongoURI = 'mongodb://localhost:27017/dbrestoran'

server.use(cors())

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connect to db success')
}).catch(err => {
  console.log('Error : ' + err)
})

server.use(bodyParser.json({
  extended: true,
  limit: '50mb'
}))

server.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}))

// list router
server.use('/admin', require('./routes/radmin'))
server.use('/user', require('./routes/ruser'))
server.use('/makanan', require('./routes/rmakanan'))
server.use('/minuman', require('./routes/rminuman'))
server.use('/transaksi', require('./routes/rtransaksi'))

server.listen(port, function()  {
  console.log('Server started on port ' + port)
})
