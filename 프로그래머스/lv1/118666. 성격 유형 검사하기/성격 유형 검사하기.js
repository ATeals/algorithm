class MBTI {
    constructor(){
        this.obj = {R : 0, T : 0,C : 0,F : 0,J : 0,M : 0,A : 0,N : 0}
    }
    countScore(item, score){
        Object.keys(this.obj).map(key=>{
            if(key === item) this.obj[key]+=score
        })
    }
    getMyMBTI(){
        const RT = this.obj.R >= this.obj.T ? "R" : "T"
        const CF = this.obj.C >= this.obj.F ? "C" : "F"
        const JM = this.obj.J >= this.obj.M ? "J" : "M"
        const AN = this.obj.A >= this.obj.N ? "A" : "N"
        
        return RT + CF + JM + AN
    }
}


                

function solution(survey, choices) {
    const mbti = new MBTI()
    survey.map((item, index)=>{
            const [first, second] =  item.split("")
            if(choices[index] > 4){
                mbti.countScore(first, 4-choices[index]) 
            }else{
                mbti.countScore(second, choices[index]-4) 
            }
            
            
        })
    return mbti.getMyMBTI();
}