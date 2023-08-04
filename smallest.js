//find the smallest number in an array
function smallestNumInArray(numbers){
    let smallest=numbers[0]
    for(var i=0;i<numbers.length;i++){
        var element=numbers[i];
        if(element<smallest){
            smallest=element;
        }
    }
    return smallest;
    
}
var array=[30,120,232,392,124]
var result=smallestNumInArray(array)
console.log(result)