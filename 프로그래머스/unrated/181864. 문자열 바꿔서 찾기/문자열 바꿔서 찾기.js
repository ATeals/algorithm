const solution = (myString, pat) => myString.replaceAll("A", "b").replaceAll("B", "a").toUpperCase().includes(pat) ? 1 : 0