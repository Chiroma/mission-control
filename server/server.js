const http = require('http')

require('dotenv').config()

const app = require('./app')
const { connectDB } = require('./db/connect')
const { loadPlanetsData } = require('./models/planets.model')
const { loadLaunchData } = require('./models/launches.model')

const port = process.env.PORT || 8000
const server = http.createServer(app)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await loadPlanetsData()
    await loadLaunchData()
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error)
  }
};

start();