
const express = require('express');
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets.router')
const launchesRouter = require('./routes/launches.router')

const app = express();
const apiUrl = '/api/v1'

app.use(cors({
  origin: 'http://localhost:3000'
}
))

//logging
app.use(morgan('combined'))

app.use(express.json());
// extra packages

// routes
app.use(express.static(path.join(__dirname,'public')))
app.get('/', (req, res) => {
  res.send('mission control api');
});

app.use(`${apiUrl}/planets`, planetsRouter)
app.use(`${apiUrl}/launches`,launchesRouter)

module.exports = app
