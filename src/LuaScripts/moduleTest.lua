local function test ()
    return 'module_key'
end

rawset(_G, "test", test)
return("test loaded into Redis")