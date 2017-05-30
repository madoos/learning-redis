'use strict'

import path from 'path'

export default {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  scriptPaths: path.join(__dirname, '../src/LuaScripts')
}
