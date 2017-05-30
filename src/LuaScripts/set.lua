
local arg = ARGV[1]
local key = KEYS[1]

return redis.call('set', key, arg) 