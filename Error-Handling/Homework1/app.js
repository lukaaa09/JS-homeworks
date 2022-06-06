function isError(){
    const value = 100;
    const nearLimit = 90;
    const limit = 100;
    try{
        if(value > nearLimit){
            throw new Error("Warning message")
        }
    }catch(err){
        if(value > limit){
            throw err
        }
        console.log(err.message)
    
    }
}
isError()