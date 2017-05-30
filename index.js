'use strict'

import config from './config'
import redisCreateClient from './src/redisCreateClient'
const redis = redisCreateClient(config)


redis
.on('error', (err) => console.log('Error =>', err))
.on('connect', () => console.log('Redis Connected'))

redis.run('test', [], [])
.then(console.log.bind(console))
.catch(console.log.bind(console))
