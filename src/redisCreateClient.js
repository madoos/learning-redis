'use strict'

import redis from 'redis'
import Scripto from 'redis-scripto'

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
  run (script, keys, values) {
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
}

export default function createClient (options) {
  return new RedisManager(options)
}
