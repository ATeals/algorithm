const solution = (myString)=>[...myString.toLowerCase()].map(i=> i === "a" ? i.toUpperCase() : i).join("")
