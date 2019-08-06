var express = require('express')
var fs = require('fs')
var http = require('http')
// var https = require('https')
// var redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
// var expressWs = require('express-ws')

var app = express()

var port = 80
var sport = 443

// var privateKey = fs.readFileSync('improveyourself.key', 'utf8')
// var certificate = fs.readFileSync('improveyourself.crt', 'utf8')

// var credentials = { key: privateKey, cert: certificate }

var httpServer = http.createServer(app)
// var httpsServer = https.createServer(credentials, app)

//https-redirecting(1:ignoring with ports,2:ignoring routes)
// app.use(redirectToHTTPS([/improveyourself.ru:(\d{4})/], [/\/insecure/], 301));

app.use(express.static(__dirname + '/static'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/static/index.html')
})

httpServer.listen(port, () => console.log('server is listening'))
// httpsServer.listen(sport, () => console.log('server is listening safely'))
