# Learning Redis

# Data types

 * scalar
 * hash
 * list
 * set
 * ordered sets


 ## Resources 

 * [Commands](https://redis.io/commands)
 * [Basic Tutorial](http://raulexposito.com/documentos/redis/)

 ## Node connector

 * [npm redis](https://github.com/NodeRedis/node_redis)

  
  ## using Lua scripts

  * [Documentation](https://www.lua.org/pil/contents.html)

  * [npm package for load Lua scriprts in Node](https://github.com/arunoda/node-redis-scripto)

## How to use?

 * Write your Lua scripts into `src/LuaScripts`
 * Load script in index.js
 * Open redis monitor with `./bin/un-redis-monitor`