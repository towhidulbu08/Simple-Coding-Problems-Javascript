function minNum(a,b,c){
    var Min=Math.min(a,b,c)
    if(a==Min){
        return a;
      }
      else if(b==Min){
        return b;
      }
      else{
       return c;
      }
}
var result=minNum(10,0,-2)
console.log(result)
