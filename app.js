const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

let port = process.env.PORT
if (port == null || port == '') {
	port == 3000
}
app.listen(3000)
