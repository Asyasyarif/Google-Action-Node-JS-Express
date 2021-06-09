const express = require('express')
const bodyParser = require('body-parser')

const port = 3000
const {
  conversation,
  Image,
} = require('@assistant/conversation')

const app = conversation()
const expressApp = express().use(bodyParser.json())

app.handle('Goodbye', conv => {
  conv.add('ada apa master?')
 })


expressApp.listen(port, () => {
	expressApp.post('/fulfillment', app)
  console.log(`Example app listening at http://localhost:${port}`)
})