'use strict'

import config from './config'
import redisCreateClient from './src/redisCreateClient'
const redis = redisCreateClient(config)
const show = console.log

redis
.on('error', (err) => console.log('Error =>', err))
.on('connect', () => console.log('Redis Connected'))

/*
redis.run('set', ['objectKey'], [{a: 1}])
.then(show)
.catch(show)

redis.run('get', ['objectKey'])
.then(JSON.parse)
.then(show)
.catch(show)

redis.run('flush')
.then(show)
.catch(show)
*/
/*
redis.run('setMultiple', ['a', 'b', 'c'], ['test', [1, 2, 3], {a: 1, b: 2}])
.then(JSON.parse)
.then(show)
.catch(show)
*/

redis
.loadModule('/functional.lua')
.run('setMultiple', ['a', 'b', 'c'], ['test', [1, 2, 3], {a: 1, b: 2}])
.then(JSON.parse)
.then(show)
.catch(show)

