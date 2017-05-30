local function meach (fn, things)
    for i, thing in ipairs(things) do
 	    fn(thing, i, things)
 	end
end

rawset(_G, "meach", meach)
local msg = "_m loaded to Redis"
return(msg)