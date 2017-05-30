'use strict'

import redis from 'redis'
import Scripto from 'redis-scripto'
import type from 'madoos-type'
import fs from 'fs'
import redisEval from 'redis-eval'

class RedisManager {

  constructor (option) {
    this._config = option
    this._client = redis.createClient(option)
    this._scriptManager = new Scripto(this._client)
    this._scriptManager.loadFromDir(option.scriptPaths)
  }

  /**
   *
   *
   * @param {String} script
   * @param {Array<String>} keys
   * @param {Array} values
   * @returns Promise
   *
   * @memberof RedisManager
   */
  run (script, keys = [], values = []) {
    keys = keys.map(this._serialize, this)
    values = values.map(this._serialize, this)

    return new Promise((resolve, reject) => {
      this._scriptManager.run(script, keys, values, (err, data) => {
        if (err) return reject(err)
        return resolve(data)
      })
    })
  }

  on (event, fn) {
    this._client.on(event, fn)
    return this._client
  }

  _serialize (item) {
    if (type.isArray(item) || type.isObject(item)) return JSON.stringify(item)
    else return item
  }

  loadModule (path) {
    const modulePath = this._config.scriptPaths + path
    const luaModule = fs.readFileSync(modulePath, 'utf8')
  
    this._client.eval(luaModule, 1, 2, function (err, reply) {
      console.log(reply)
    })

    return this
  }
}

export default function createClient (options) {
  return new RedisManager(options)
}
