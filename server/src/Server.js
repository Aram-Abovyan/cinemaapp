const app = require('./App')

class Server {
  constructor() {
    this.app = app
    this.port = process.env.PORT || 8080
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}

const server = new Server()
server.start();