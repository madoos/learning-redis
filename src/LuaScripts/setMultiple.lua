local function setValues(key, val)
    return redis.call('set', key, val)
end

setValues(test(), 'module_test_1')


functional.each(function(key, i) setValues(key, ARGV[i]) end, KEYS)