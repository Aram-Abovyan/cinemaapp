const { PrismaClient } = require('@prisma/client')

class DBClient {
  constructor() {
    this._client = new PrismaClient()
  }

  get client() {
    if (!this._client) {
      this._client = new PrismaClient()
    }

    return this._client
  }
}

module.exports = new DBClient().client