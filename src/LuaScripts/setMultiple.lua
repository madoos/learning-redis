local function setValues(key, val)
    return redis.call('set', key, val)
end

meach(function(key, i) setValues(key, ARGV[i]) end, KEYS)