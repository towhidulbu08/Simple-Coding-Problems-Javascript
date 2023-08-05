function reverseStr(str){
    let reverseJoin=''
        for(var i=str.length-1;i>=0;i--){
            var element=str[i]
            reverseJoin+=element;
            console.log(i,reverseJoin)
            
            
        }
        return reverseJoin
}
var string="I am a good boy";
var result=reverseStr(string)
console.log(result)