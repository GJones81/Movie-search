//require needed modules
let express = require('express')
let fetch = require('node-fetch')

//load environment variables
require('dotenv').config()

//declare new express app
let app = express()

//set template language 
app.set('view engine', 'ejs')

//declare routes

app.get('/', (req, res) => {
	res.render('home')
})

app.get('/search', (req, res) => {
	let url = `http://www.omdbapi.com/?s=${req.query.query}&apikey=${process.env.OMDB_API_KEY}`
	fetch(url)
	.then(response => response.json())
	.then(data => {
	res.render('results', {results: data.Search, query: req.query.query})
	})

	.catch(err => {
		console.log('OH shit!, err')
		res.render('Error!')
	})
})

//pick a port to listen on

app.listen(3000)