function searchWord(str, word){
    if(typeof str !== 'string'){
        throw new TypeError("both parameters should be a strings")
    }else if(typeof word !== 'string'){
        throw new TypeError("both parameters should be a strings")
    }
    let str3 = str.split(word).length - 1;
    if(str.includes(word)){
        console.log(word + " was found " + str3 + " times")
    }
}
try{
searchWord("sunshine sun  mgeli", "mgeli")
}catch(err){
    console.log(err.message)
}
