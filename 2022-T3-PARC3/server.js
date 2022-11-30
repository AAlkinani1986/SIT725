var express = require('express')
var app = express()
// call index html when the server run
app.use(express.static(__dirname + '/public'))
//use json data format
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// run on port 3000
var port = process.env.port || 3000
// listen to port 3000
app.listen(port, () => {
  console.log('App listening to: ' + port)
})
