let str = '<p><strong><em>Content</em></strong></p>';
function rmHtmlTags(str){
    if(typeof str !== 'string'){
        throw new TypeError("parameter should be a string")
    }else{
        return str.replace(/(&nbsp;|<([^>]+)>)/ig, "");
    }

}
try{
    console.log(rmHtmlTags(str));
}catch(err){
    console.log(err.message)
}
