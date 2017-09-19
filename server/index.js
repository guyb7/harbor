const express = require('express')

const app = express()

app.get ('/', function (req, res) {
  res.sendFile('/client/homepage.html', { 'root': __dirname + '/../' })
})
app.use('/app', express.static('dist'))
app.use('/static', express.static('dist/static'))
app.use (function (req, res) {
  res.sendFile('/client/index.html', { 'root': __dirname + '/../' })
})

app.listen(3020, () => {
  console.log('UI Boilerplate is listenting')
})
