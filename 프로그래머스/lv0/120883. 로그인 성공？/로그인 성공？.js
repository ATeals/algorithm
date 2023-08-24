function solution([id, pw], db) {
    const dbMap = new Map()
    db.map(([id,pw])=> dbMap.set(id, pw))
    return dbMap.has(id) ?( pw == dbMap.get(id) ? "login" : "wrong pw" ):"fail"
}