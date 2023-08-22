const solution = (n, m, section)=> section.reduce(([end,count],c)=>end < c ? [c+m-1, ++count] : [end,count]
, [0,0])[1]