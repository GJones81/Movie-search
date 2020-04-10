//require needed modules
let express = require('express')

//declare new express app
let app = express()

//declare routes

app.get('/', (req, res) => {
	res.send('Home page stub')
})

//pick a port to listen on

app.listen(3000, () => {
	console.log("Ready to rock'n'roll")
})