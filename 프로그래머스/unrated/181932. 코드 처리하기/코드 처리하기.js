function solution(code) {
    let str = ""
    let mode = true
    code.split("").map((item, index)=>{
        if(item == 1) mode = !mode
        else{
            if(mode){
                if(index%2 == 0) str += item
            }else{
                if(index%2 == 1) str += item
            }
        }
    })

    return str? str : "EMPTY";
}