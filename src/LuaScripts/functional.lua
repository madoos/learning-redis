local functional = {}

function functional.each (fn, things)
    for i, thing in ipairs(things) do
 	    fn(thing, i, things)
 	end
end

function functional.map (fn, things)
 	local mapped = {}
 	for index, thing in pairs(things) do
 	    mapped[index] = fn(thing)
 	end
 	return mapped
end

function functional.filter (things, fn)
 	local filtered = {}
 	each(function(thing)
 	    if fn(thing) then
 	        table.insert(filtered, thing)
 	    end
 	end, things)
 	return filtered
end


rawset(_G, "functional", functional)
local msg = "Functional module loaded into Redis"
return(msg)