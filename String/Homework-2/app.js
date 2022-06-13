function convertString (str) {
    if(typeof str !== 'string'){
        throw new TypeError("parameter should be a string")
    }
    let emptyStr = "";
    for(let i = 0; i < str.length; i++) {
        let str2 = str.charAt(i);
        if (str2 == str2.toUpperCase()) {
            str2 = str2.toLowerCase();
        } else {
            str2 = str2.toUpperCase();
        }
        emptyStr = emptyStr + str2
    }
    return emptyStr;
};
try{
console.log(convertString("didi SITYVA"));
}catch(err){
    console.log(err.message)
}