function reverseWord(str){
    var reversed=[];
    var word =str.split(' ')
    for(var i=word.length-1;i>=0;i--){
        var element=word[i]
        reversed.push(element)
        
    }
    const nowJoinWord=reversed.join(' ');
    return nowJoinWord
}
var string="I am a good boy"
var result=reverseWord(string)
console.log(result)