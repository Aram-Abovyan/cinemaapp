const express = require('express')
const cors = require('cors')
const rootRouter = require('./routes/RootRouter')

class App {
  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use('/api', rootRouter)
  }
}

module.exports = new App().app