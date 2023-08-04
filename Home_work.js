function maxNumber(jim,dela,chinku){
    var Max=Math.max(jim,dela,chinku)
    
    if(jim==Max){
       return "jim";
    }
    else if(dela==Max){
        return "dela";
    }
    else {
       return "chinku";

    }


}
var result=maxNumber(23,450,100)
//console.log(result)
function largestNum(a,b,c){
    if(a>b && a>c){
        return a;
      }
      else if(b>a && b>c){
        return b;
      }
      else{
       return c;
      }

}
var result2=largestNum(30,140,50)
console.log(result2)
