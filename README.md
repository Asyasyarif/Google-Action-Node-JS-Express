# Setup Instructions

Make sure Node.js >=10.18.0 is installed.
<p>Cretae directory for your app</p>

```
$ mkdir myapp
$ cd myapp
```

```
$  npm init
```
<p>We use express js & body parser, install it</p>

```
$  npm install express --save
$  npm i body-parser
```
after that Install the library

```
$  npm install @assistant/conversation 
  ```
or if you use yarn
``` 
$  yarn add @assistant/conversation 
```

<p>create the file called <b>app.js</b></p>

```
const express = require('express')
const bodyParser = require('body-parser')

const port = 3000
const {
  conversation,
  Image,
} = require('@assistant/conversation')

const app = conversation()
const expressApp = express().use(bodyParser.json())

app.handle('YOUR_WEBHOOK_NAME', conv => {
  conv.add('ada apa master?')
 })

expressApp.listen(port, () => {
	expressApp.post('/fulfillment', app)
  console.log(`Example app listening at http://localhost:${port}`)
})
```

then run it
```
$ node app.js
```

it will run on localhost:3000
<hr>

## Ngrok

```
ngrok http localhost:3000
```
choose https and place to Google action console webhook url


## Reference
https://github.com/actions-on-google/assistant-conversation-nodejs/